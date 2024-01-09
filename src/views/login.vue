<template>
	<div class="login-wrap">
		<div class="ms-login">
			<div class="ms-title">EE管理システム</div>
			<authenticator :hide-sign-up="true">
			</authenticator>
		</div>
	</div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { Hub } from 'aws-amplify/utils';
import { translations } from '@aws-amplify/ui';
import { I18n } from 'aws-amplify/utils';
import {getCurrentUser, fetchAuthSession} from "@aws-amplify/auth";
import { getUserInfo } from '../api/user';

I18n.putVocabularies(translations);
I18n.setLanguage('ja');
const router = useRouter();
Hub.listen('auth', ({ payload }) => {
  switch (payload.event) {
    case 'signedIn':
	console.log("=====signedIn======", router);
		(async () => {
            await initializeUserInfo();
			router.push("/about");
          })();
		console.log("=====signedIn end======");
      break;
    case 'signedOut':
      console.log('user have been signedOut successfully.');
	  router.push("/login");
      break;
    case 'tokenRefresh':
      console.log('auth tokens have been refreshed.');
      break;
    case 'tokenRefresh_failure':
      console.log('failure while refreshing auth tokens.');
      break;
    case 'signInWithRedirect':
      console.log('signInWithRedirect API has successfully been resolved.');
      break;
    case 'signInWithRedirect_failure':
      console.log('failure while trying to resolve signInWithRedirect API.');
      break;
    case 'customOAuthState':
	console.info('custom state returned from CognitoHosted UI');
      break;
  }
});

const initializeUserInfo = async () => {
	 getCurrentUser().then((data) => {
    console.log("getCurrentUser:", data)
         if (data && data.username) {
          //  store.commit("setUser", data);
           localStorage.setItem('ee_user',data.username);
           return data;
         }
       })
       .catch((e) => {
         console.error(e);
         localStorage.setItem("ee_user", "");
         return null;
       });
  const session = await fetchAuthSession();
	const  payload  = session.tokens?.idToken?.payload;
	console.log('session:', session);
    if (payload && payload['cognito:username']) {
      const username = payload['cognito:username'];
      localStorage.setItem('userGroup',JSON.stringify(payload['cognito:groups']));
      getUserInfo(username.toString()).then(res =>{
        // @ts-ignore
          localStorage.setItem('userInfo',JSON.stringify(res.getMemberInfo));
          
      });
    }
  };
</script>

<style scoped>
.login-wrap {
	position: relative;
	width: 100%;
	height: 100%;
	/*background-image: url(../assets/img/login-bg.jpg);*/
	background-size: 100%;
}
.ms-title {
	width: 100%;
	line-height: 50px;
	text-align: center;
	font-size: 20px;
	color: #fff;
	border-bottom: 1px solid #ddd;
}
.ms-login {
	position: absolute;
	left: 50%;
	top: 50%;
	width: 470px;
	margin: -190px 0 0 -175px;
	border-radius: 5px;
	background: rgba(255, 255, 255, 0.3);
	overflow: hidden;
}
.ms-content {
	padding: 30px 30px;
}
.login-btn {
	text-align: center;
}
.login-btn button {
	width: 100%;
	height: 36px;
	margin-bottom: 10px;
}
.login-tips {
	font-size: 12px;
	line-height: 30px;
	color: #fff;
}
</style>
../api