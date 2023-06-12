# 认证过程

过程如下：

![](images/md/1662709644699.png)

- 客户端向认证服务器发起认证请求，传递应用相关参数
- 认证服务器认证通过后，服务器返回访问令牌

# 认证接口

## 获取请求令牌

> 获取令牌Access-Token

### 请求地址

> /openapi/auth/credential

### 请求方式

> POST

<table><tr><td bgcolor=MistyRose><font color=Red>（非Json格式入参，请使用Params参数传参）</font></td></tr></table> 

### 请求参数

| 参数名称 | 类型   | 参数值                                                     |
| -------- | ------ | ---------------------------------------------------------- |
| clientId | String | 申请应用的公钥 clientId(在“我的应用”列表中查看)            |
| secret   | String | 申请应用之后返回的私钥（在“我的应用”列表中点击“查看”按钮） |
| userType | String | 用户类型，固定参数字符串：2                                |

### 响应参数

| 参数名称  | 类型    | 响应说明                                                     |
| --------- | ------- | ------------------------------------------------------------ |
| code      | Integer | 响应code                                                     |
| message   | String  | 响应信息                                                     |
| trackId   | String  | --                                                           |
| data      | String  | 响应数据， Access-Token字符串，有效时间是默认2个小时，请注意使用和获取时间 |
| extr      | String  | --                                                           |
| timestamp | Integer | 时间戳                                                       |
| _status   | String  | 响应状态                                                     |
| ok        | Boolean | 是否成功                                                     |

## 使用令牌调用业务接口

### 请求地址

> 在开放平台>资源申请 列表中，点击“查看”按钮查看

### 请求方式

> 在开放平台>资源申请 列表中，点击“查看”按钮查看

### 请求参数

- HEADER

| 参数名称     | 类型   | 参数说明                         |
| ------------ | ------ | -------------------------------- |
| Access-Token | String | HEADER参数，第一步获取的访问令牌 |
| Request-Id   | String | 请求Id,每次请求唯一标识          |

- 其他参数

  参见具体OPEN AP接口说明

### 响应参数

| 参数名称  | 类型    | 响应说明                        |
| --------- | ------- | ------------------------------- |
| code      | Integer | 响应code                        |
| message   | String  | 响应信息                        |
| trackId   | String  | --                              |
| data      | String  | 响应数据,由开放接口返回具体信息 |
| extr      | String  | --                              |
| timestamp | Integer | 时间戳                          |
| _status   | String  | 响应状态                        |
| ok        | Boolean | 是否成功                        |