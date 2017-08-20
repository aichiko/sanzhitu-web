<template>
  <div class="">
    <section>
      <!--工具条-->
    <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
      <el-form :inline="true" :model="filters" style="float: left; padding-top: 15px; padding-left: 15px">
        <el-form-item>
          <el-input v-model="filters.name" placeholder="姓名"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" v-on:click="getBanners">查询</el-button>
        </el-form-item>
        <el-form-item>
          <!-- <el-button type="primary" @click="handleAdd">新增</el-button> -->
        </el-form-item>
      </el-form>
    </el-col>

    <!--列表-->
		<el-table :data="banners" stripe highlight-current-row style="width: 100%;">
			<el-table-column type="index" width="70" align="center">
			</el-table-column>
			<el-table-column prop="title" label="图片名称" width="220" align="center" show-overflow-tooltip>
			</el-table-column>
			<el-table-column prop="url" label="图片链接" width="220" align="center" show-overflow-tooltip>
			</el-table-column>
			<el-table-column label="图片展示" width="300" align="center">
        <template scope="scope">
					<img :src="scope.row.url" alt="加载中" style=" height: 80px; padding-top: 10px;">
				</template>
			</el-table-column>
			<el-table-column label="操作" width="200" align="center">
				<template scope="scope">
					<el-button size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
					<el-button type="danger" size="small" @click="handleDel(scope.$index, scope.row)">删除</el-button>
				</template>
			</el-table-column>
		</el-table>


    <!--工具条-->
		<el-col :span="24" class="toolbar">
			<el-pagination layout="prev, pager, next" @current-change="handleCurrentChange" :page-size="20" :total="total" style="float:right;">
			</el-pagination>
		</el-col>

    <!--新增界面-->
		<el-dialog title="新增" v-model="addFormVisible" :close-on-click-modal="false">
			<el-form :model="addForm" label-width="80px" :rules="addFormRules" ref="addForm">
				<el-form-item label="标题" prop="title">
					<el-input v-model="addForm.title" auto-complete="off"></el-input>
				</el-form-item>
        <el-form-item label="图片链接" prop="url">
					<el-input v-model="addForm.url" auto-complete="off" :disabled="true"></el-input>
				</el-form-item>
        <el-form-item>
          <div class="upload-demo">
            <div class="el-upload el-upload--picture">
              <button @click="uploadClick" type="button" class="el-button el-button--primary el-button--small"><!----><!----><span>点击上传</span></button> 
              <input type="file" name="file" class="el-upload__input" id="upload-file" @change="inputChange">
            </div>
            <div class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
            <ul class="el-upload-list el-upload-list--picture"></ul>
          </div>
        </el-form-item> 
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click.native="addFormVisible = false">取消</el-button>
				<el-button type="primary" @click.native="addSubmit" :loading="addLoading">提交</el-button>
			</div>
		</el-dialog>

    <!--编辑界面-->
		<el-dialog title="编辑" v-model="editFormVisible" :close-on-click-modal="false">
			<el-form :model="editForm" label-width="80px" :rules="editFormRules" ref="editForm">
				<el-form-item label="标题" prop="title">
					<el-input v-model="editForm.title" auto-complete="off"></el-input>
				</el-form-item>
        <el-form-item label="图片链接" prop="url">
					<el-input v-model="editForm.url" auto-complete="off" :disabled="true"></el-input>
				</el-form-item>
        <el-form-item>
          <el-upload
            class="upload-demo"
            ref="upload"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :on-change="fileChange"
            :auto-upload="false"
            :disabled="fileList.length > 0">
            <el-button slot="trigger" size="small" type="primary" :disabled="fileList.length > 0">修改图片</el-button>
            <!-- <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button> -->
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
        </el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
        <el-button @click.native="editFormVisible = false">取消</el-button>
        <el-button type="primary" @click.native="editSubmit" :loading="editLoading">确认</el-button>
      </div>
		</el-dialog>
    </section>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  data () {
    return {
      filters: {
        name: ''
      },
      banners: [],
      total: 0,
      page: 1,

      addFormVisible: false, // 新增界面是否显示
      addLoading: false,
      // 新增界面数据
      addForm: {
        title: '',
        url: ''
      },
      addFormRules: {
        title: [
          { required: true, message: '请输入标题', trigger: 'blur' }
        ]
      },

      fileList: [],

      editIndex: 0,
      editLoading: false,
      editFormVisible: false,
      editForm: {
        title: '',
        url: ''
      },
      editFormRules: {
        title: [
          { required: true, message: '请输入标题', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    getBanners () {
      var that = this
      $.ajax({
        url: 'http://120.27.219.220:8080/banner/all',
        type: 'get'
      }).done(function (res) {
        console.log('---------', res)
        that.banners = res
        that.total = that.banners.length
      }).fail(function (res) {
        console.log('=========', res)
      })
    },
    handleAdd () {
      this.addFormVisible = true
    },
    addSubmit () {
      this.addFormVisible = false
    },
    // 编辑
    handleEdit (index, row) {
      console.log(index, row)
      this.editIndex = index
      this.editFormVisible = true
      this.editForm = this.banners[index]
    },
    editSubmit () {
      this.$refs.editForm.validate((valid) => {
        if (valid) {
          console.log('编辑完成')
          this.uploadAction(this.fileList[0])
        }
      })
    },
    // 删除
    handleDel (index, row) {
      console.log(index, row)
    },
    handleCurrentChange () {
    },

    // 增加数据的一系列方法
    handleRemove (file, fileList) {
      console.log(file, this.fileList)
    },
    handlePreview (file) {
      console.log(file)
    },
    fileChange (file, fileList) {
      this.fileList = fileList
    },
    // 上传功能
    uploadClick (event) {
      console.log(event)
      // 触发文件选择的click事件
      document.getElementById('upload-file').click()
    },
    inputChange () {
      let input = document.getElementById('upload-file')
      let files = input.prop('files')
      this.uploadAction(files[0])
    },
    uploadAction (file) {
      var data = new FormData()
      data.append('file', file.raw)
      console.log('------', 'change!!!', file.raw, data)
      // this.$http.options.emulateJSON = true
      // this.$http.options.emulateHTTP = true
      // this.$http.post('http://120.27.219.220:8080/file/upload', data, {
      //   headers: {'Access-Control-Allow-Origin': '*'}
      // }
      // )
      // .then(function (res) {
      //   console.log('-------', res)
      // }, function (res) {
      //   console.log('=======', res)
      // })
      var that = this
      $.ajax({
        url: 'http://120.27.219.220:8080/file/upload',
        type: 'POST',
        data: data,
        processData: false,
        contentType: false
      }).done(function (res) {
        console.log('---------', res)
        that.banners[that.editIndex].url = res
        that.editFormVisible = false
        that.$refs.upload.clearFiles()
        $.ajax({
          url: 'http://120.27.219.220:8080/banner/update',
          type: 'get',
          data: {id: that.editIndex + 1, title: that.banners[that.editIndex].title, url: res}
        }).done(function (res) {
          console.log('---------', res)
        }).fail(function (res) {
          console.log('=========', res)
        })
      }).fail(function (res) {
        console.log('=========', res)
      })
    }
  },
  mounted: function () {
    this.getBanners()
  },
  watch: {
    fileList: function () {
      console.log(this.fileList)
    }
  }
}
</script>

<style lang="less">

</style>
