<template>
  <div>
  	<div class="index_center">
    <div class="login_box">
        <h2 class="logh2">注册</h2>
        <form ation="" method="post">
            <p><label for=""><em>*</em>手机号</label><input type="text" name="mobileNo" id="mobileNo" class="hastips">	            
	            <span id="mobileNo_warn" class="action_validate" style="display: none;">
            			<span class="action_validate_top">请输入您的手机号码</span>
            			<span class="action_validate_bot"></span>
            	</span> 
            </p>
            <p>
            <label for=""><em>*</em>密码</label><input class="hastips" type="password" name="pwd" id="pwd">          
            <span id="pwdlen_warn" class="action_validate" style="display: none;">
            			<span class="action_validate_top">请输入至少6位的密码</span>
            			<span class="action_validate_bot"></span>
            	</span> 
            </p>
            <p><label for=""><em>*</em>确认密码</label><input class="hastips" type="password" name="pwd2" id="pwd2">
       
            <span id="pwd_warn" class="action_validate" style="display: none;">
            			<span class="action_validate_top">请再次输入您的的密码</span>
            			<span class="action_validate_bot"></span>
            	</span> 
            </p>
            <p><label for=""><em>*</em>姓名</label><input type="text" name="realName" id="realName"></p>
            <p><label for=""><em>*</em>工种</label>
            	<select id="work_type" name="work_type">
					<option value="1">水电工</option>
					<option value="2">木工</option>
					<option value="3">泥瓦工</option>
					<option value="4">油漆工</option>
					<option value="5">布艺</option>
					<option value="6">安装工</option>
					<option value="7">配送工</option>
					<option value="8">搬运工</option>
					<option value="9">工长</option>
					<option value="99">其他</option>
				</select></p>
            <p><label for=""><em>*</em>工龄</label><input type="text" name="work_age" id="work_age"></p>
            <p><label for=""><em>*</em>头像</label><span style="display: inline-block;height:33px;vertical-align: middle;"><span class="file" style="color:black;">选择</span></span>
            	<span id="imgs"></span>
            	<input type="hidden" name="headPic" id="headPic"> 
            </p>
            <p><label for=""><em></em>所属分站</label>
            	<input type="hidden" name="substation_name" id="substation_name">
            	<select id="substation_id" name="substation_id">
				<option value="0">总站</option><option value="201">三只兔苏北运营中心</option><option value="200">三只兔城口分站</option><option value="199">山西襄汾站</option><option value="198">三只兔浦北站</option><option value="197">三只兔梁平分站</option><option value="196">三只兔丽江运营中心</option><option value="195">三只兔内蒙古运营中心</option><option value="194">三只兔云阳站</option><option value="193">湖北咸宁分站</option><option value="192">广安三只兔分站</option><option value="191">三只兔阳泉运营中心</option><option value="190">三只兔宝安运营中心</option><option value="189">三只兔青岛分站</option><option value="188">三只兔石柱分站</option><option value="187">三只兔铜梁分站</option><option value="186">三只兔浦北分站</option><option value="185">三只兔梧州站</option><option value="184">三只兔万州站</option><option value="183">三只兔景德镇分站</option><option value="182">三只兔姜堰站</option><option value="181">三只兔顺德运营中心</option><option value="180">三只兔南阳分站</option><option value="179">三只兔长寿运营中心</option><option value="178">三只兔姜堰分站</option><option value="177">佛山三只兔</option><option value="176">安徽滁州明光站</option><option value="175">西安高陵分站</option><option value="174">西安市运营中心huangsir</option><option value="171">三只兔南京运营</option><option value="169">山西省临汾站</option><option value="168">测试分站(测试微信)</option><option value="167">测试曹操分站</option><option value="166">三只兔北方营销中心</option><option value="165">江苏南通(总部)分站</option><option value="164">重庆潼南分站</option><option value="160">济宁分站</option><option value="159">海口分站</option><option value="158">浙江绍兴柯桥分站</option><option value="157">已安装订单维修</option><option value="156">新疆库尔勒市分站</option><option value="154">重庆金科分站</option><option value="153">湖北利川市站</option><option value="152">重庆市两路分站</option><option value="151">乌鲁木齐分站</option><option value="150">重庆巴南分站</option><option value="149">福建漳州分站</option><option value="148">浙江省绍兴市分站</option><option value="147">浙江省嵊州市分站</option><option value="146">重庆南岸长生分站</option><option value="145">兰州市订单处理分站</option><option value="144">武汉黄陂区分站</option><option value="142">山东烟台订单处理分站</option><option value="141">河南省三门峡市卢氏县分站</option><option value="140">咸阳临时订单处理分站</option><option value="138">厦门分站</option><option value="137">山东省临沂市分站</option><option value="136">熊师傅分站</option><option value="135">甘肃省兰州市分站</option><option value="134">烟台分站暂停使用</option><option value="133">广州市分站</option><option value="111">湖南省长沙市分站</option><option value="110">重庆市分站</option><option value="109">河南驻马店分站</option><option value="108">河南洛阳分站</option><option value="107">浙江宁波分站</option><option value="106">河南林州分站</option><option value="105">河南鹤壁分站</option><option value="104">江苏扬州分站</option><option value="103">孝感孝南区分站</option><option value="102">内蒙古包头分站</option><option value="101">福建长泰分站</option><option value="100">浙江温州分站</option><option value="99">江苏无锡分站</option><option value="98">福建云霄分站</option><option value="97">江苏南通分站T</option><option value="96">福建福清分站</option><option value="95">江苏淮安分站</option><option value="94">江苏宿迁分站</option><option value="93">安徽宿州分站</option><option value="92">河南许昌分站</option><option value="91">山西省晋城分站</option><option value="90">江苏省泰州市姜堰区分站</option><option value="89">南京市雨花台分站</option><option value="88">江苏镇江分站</option><option value="87">江苏省常州分站</option><option value="86">上海市测试站</option><option value="84">广西南宁西乡塘分站</option><option value="83">河南郑州申旺分站</option><option value="82">南京建邺浦口区分站</option><option value="81">安徽青阳分站</option><option value="80">湖北鄂州分站</option><option value="79">青岛市黄岛分站</option><option value="78">内蒙古呼和浩特分站</option><option value="77">湖北恩施分站</option><option value="76">广东东莞市分站</option><option value="75">深圳龙华分站</option><option value="72">江西九江分站</option><option value="71">安徽合肥分站</option><option value="70">四川泸州分站</option><option value="69">四川阆中分站</option><option value="68">四川成都市分站</option><option value="67">湖北红安分站</option><option value="66">陕西西安分站</option><option value="65">湖北秭归分站</option><option value="64">湖北宜昌分站</option><option value="63">湖北荆州分站</option><option value="62">河南淇县分站</option><option value="61">河南郑州分站</option><option value="60">湖北枣阳分站</option><option value="59">漳州停用</option><option value="58">湖北襄阳分站</option><option value="56">湖南醴陵分站</option><option value="51">重庆开县分站</option><option value="50">潍坊诸城分站</option><option value="48">湖北黄梅县分站</option><option value="47">武汉汉口北分站</option><option value="46">武汉硚口区分站</option><option value="45">已删除订单组</option><option value="44">深圳南山区分站</option><option value="43">深圳福田区分站</option><option value="42">深圳龙华新区分站</option><option value="41">深圳宝安区分站</option><option value="40">青岛李沧区分站</option><option value="39">青岛四方区分站</option><option value="38">青岛城阳区分站</option><option value="37">青岛市北区分站</option><option value="36">青岛市南区分站</option><option value="35">青岛平度市分站</option><option value="34">青岛胶州市分站</option><option value="33">青岛西海新区分站</option><option value="32">广西柳州市分站</option><option value="31">南宁青秀区分站</option><option value="30">南宁江南区分站</option><option value="29">西安咸阳市分站</option><option value="28">西安临潼区分站</option><option value="27">西安未央区分站</option><option value="26">四川南充运营中心</option><option value="25">南充顺庆区分站</option><option value="24">南充市南部县分站</option><option value="23">南充市嘉陵区分站</option><option value="22">福建龙岩市分站</option><option value="21">福建福州市分站</option><option value="20">福建南平市分站</option><option value="19">福建建宁县分站</option><option value="18">福建清流县分站</option><option value="17">福建宁化县分站</option><option value="16">福建漳浦县分站</option><option value="15">福建泉州市分站</option><option value="14">福建三明市分站</option><option value="12">福建南安市分站</option><option value="11">福建安溪县分站</option><option value="10">福建省运营中心</option><option value="9">广西省运营中心</option><option value="8">武汉市运营中心</option><option value="7">武汉江岸区分站</option><option value="6">西安市运营中心</option><option value="5">宜昌市运营中心</option><option value="4">山东青岛市分站</option><option value="3">湖北仙桃市分站</option><option value="2">测试分站</option></select></p>
            <p><label for="">个人简介</label><textarea name="description" id="description" cols="50" rows="5"></textarea></p>
            
            <input type="hidden" name="user_type" value="1">
            <p><button type="button" style="margin-top:2px" onclick="validate()">注册</button> &nbsp;<a href="http://www.sanztu.com:80/portal_login_craftsman" style="color:blue">已有账号？</a></p>
        </form>
    </div>
</div>
  </div>
</template>

<script type="ecmascript-6">
export default {
  data () {
    return {
    }
  }
}
</script>
<style lang="less" scoped rel="stylesheet">
.login_box {
  height: auto;
  margin: 20px auto;
  padding-bottom:60px;
  width: 980px;
  font-size: 14px;
  background: #fff;
  border: 1px solid #dedede;
  .logh2 {
    margin: 30px 0px 0px 30px;
    padding-bottom: 10px;
    padding-left: 10px;
    border-bottom: 1px solid #0095e6;
    width: 90%;
    color: #0095e6;
    font-size: 20px;
	}
	form {
    width: 800px;
    margin: 50px auto 0px;
    p{
    	padding: 5px 0px;
    	text-align:left;
    	position: relative;
    	border: 1px solid transprant;
    	label {
		    display: inline-block;
		    width: 100px;
		    text-align: right;
		    margin-right: 8px;
		    em {
				  color: #fd0220;
				}
			}
			input {
		    padding: 7px 2px;
		    border: 1px solid #cccccc;
		    width: 234px;
		    vertical-align: middle;
		    height: 30px;
		    color: #666;
			}
			select {
		    border: 1px solid #cecece;
		    width: 200px;
		    height: 25px;
			}
			.file {
		    position: right;
		    display: inline-block;
		    background: #D0EEFF;
		    border: 1px solid #99D3F5;
		    border-radius: 4px;
		    padding: 4px 12px;
		    overflow: hidden;
		    color: #1E88C7;
		    text-decoration: none;
		    text-indent: 0;
			}
			textarea {
			  resize: vertical;
			  border: 1px solid #eee;
			}
    }
    input {
	    padding: 7px 2px;
	    border: 1px solid #cccccc;
	    width: 234px;
	    vertical-align: middle;
	    height: 30px;
	  }
	  button {
	    background: #0095e6;
	    text-align: center;
	    line-height: 32px;
	    height: 32px;
	    color: #fff;
	    font-size: 16px;
	    margin: 23px 0px 0px 111px;
	    padding: 0 15px;
		}
	}
}
</style>