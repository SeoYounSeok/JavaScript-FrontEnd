### HTTP 와 HTTPS 의 차이는 뭘까요?

```
* 먼저 HTTP에 대해서 알아보자.

  = HTTP는 인터넷에서 하이퍼텍스트를 전송하기 위해 사용되는 통신 규약이다.
  = 80번 포트
  = 단순 텍스트를 주고 받기 때문에 전송 신호를 인터셉트 하는 경우 원하지 않는 데이터 유출이 발생할 수 있다.
  
  * HTTP의 보안 취약점을 해결하기 위한 프로토콜이 HTTPS다.
  
* HTTPS 는?? HTTP + S (Secure Socket)
  
  = "보안" 요소가 추가되는 것이 가장 큰 차이점.
  = 웹 서버에 접속하는 사용자에게 모두 동일한 암호를 제공하는 것이 아니라, 사용자 마다 다른 암호를 제공합니다.

  + 클라이언트는 공개키를 얻어 데이터를 암호화해서 전송하고, 서버는 개인키를 이용해 보호화한다. 
    만약 반대로 서버가 정보를 제공하는 경우에는 개인키로 암호화한 정보를 전송하기 때문에 공개키가 있는 사용자는 누구나 정보를 알 수 있다.

```

### SSL, TLS ?

```
* SSL : 보안 소켓 계층 / TLS : 전송 계층 보안
  
  = SSL 은 웹 사이트와 브라우저 (두 서버) 사이에 전송된 데이터를 암호화하여 인터넷 연결을 보안을 유지하는 표준 기술입니다.
  = TSL 는 가장 최신 기술로 더 강력한 버전의 SSL 로 알고 있습니다.

* HTTPS : 웹 사이트를 SSL/TLS 인증서로 보안하는 경우 URL 창에 표시됩니다.

```

### 추가적인 정보

```
* HTTP 와 HTTPS 의 속도

  = 암호화 통신이 이루어지기 때문에 HTTPS 가 더 느리다고 생각하고 있었다. 
    하지만, 5G 시대에 가까워지는 만큼 속도는 점점 차이가 없어질 것 입니다.
```
![image](https://user-images.githubusercontent.com/43161245/93475663-daef8500-f933-11ea-97f6-e155f9f4d0ab.png)  
[사진 출처](https://whatismarketing.tistory.com/61)