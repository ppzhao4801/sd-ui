# 接口调用参考DEMO

## 获取认证

### CURL请求

```shell
curl https://*****.com/openapi/auth/credential -d 'clientId=XXXXXX&secret=XXXXXXXXX&userType=2' -X POST
```

### Postman形式请求

![image.png](images/md/0086NgqGly1h3b1k5do9ej311l0kfah5.jpg)

### Java版本

```java
/**
* @ClassName OpenApiTest
* @Description 
* @Author 
* @Date 
* @Company */
public class OpenApiTest {
    
    // OpenAPI开放平台地址
	private static final String OAPI_GATEWAY_URL ="https://*****.com/";
	/**
	* 接口调用参照样例
	*/
    @Test
    public void testContractReq() {
        //获取令牌
        String token = getToken("应用编码", "应用秘钥", "2");
        if (StringUtils.isNotEmpty(token)) {
            HttpResponse response = HttpUtil.createPost(OAPI_GATEWAY_URL + "具体开放接口路径，参见资源申请列表")
            .header("Access-Token", token)
            .body(JSONUtil.createObj().toString())
            .execute();
            System.out.println("JSONObject.toJSONString(response) = " + JSONObject.toJSONString(response));
        }
    }

    /**
    * 获取Open-API 令牌
    * @param clientId   应用clientId
    * @param secret     应用密钥
    * @param userType   用户类型，默认为2
    * @return */
    private String getToken(String clientId,String secret,String userType) {
        HttpRequest post = HttpUtil.createPost(OAPI_GATEWAY_URL +"openapi/auth/credential");
        Map<String, String> paramMap = new HashMap<>(3);
        paramMap.put("clientId", clientId);
        paramMap.put("secret", secret);
        paramMap.put("userType", userType);
        String resBody = post.body(HttpUtil.toParams(paramMap)).execute().body();
        System.out.println("resBody = " + resBody);
        try {
      	  ResObj resObj = JSONObject.parseObject(resBody, ResObj.class); 
          return resObj.data().toString();
        } catch (Exception e) {
            e.printStackTrace();
            System.out.println(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>获取TOKEN响应类返回异常");
        }
        return null;
    }
}
```

### 响应数据案例

```json
{
    "code": 200,
    "message": null,
    "_trackId": null,
    "data": "XXXXXXXXXXXXXXXXXXX.XXXXXXXXXXXXXXXXX.XXXXXXXXXXXXXXXXXX",
    "extr": null,
    "timestamp": 1649414084546,
    "_status": null,
    "ok": true
}
```

# 附录

## 响应码说明

| 响应编码 | 响应信息                                   |
| -------- | ------------------------------------------ |
| 10101    | 非法的ApiKey，请联系接口对接人！           |
| 10102    | 您的应用Secret Key错误！                   |
| 10103    | 您的应用已被禁用，请联系接口对接人！       |
| 10104    | 合作方已禁用，请联系接口对接人！           |
| 10106    | 您的IP地址受限，请联系接口对接人！         |
| 10131    | 缺少必要请求参数！                         |
| 10132    | 签名验证失败，请按照文档重新生成签名！     |
| 10133    | 请求接口未授权，请联系接口对接人！         |
| 10134    | 非法的AccessToken或已失效，请重新获取！    |
| 10135    | 解密合作方应用请求数据失败，请联系管理员！ |

