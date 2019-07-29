import nextCookie from 'next-cookies'
import Router from 'next/router';

export const getCookiesFromContext = ctx => {
  let cookies = nextCookie(ctx);
  let token = cookies.CPA;
  let user = typeof(token) !== "undefined" ? JSON.parse(cookies.user_data) : {};

  if(ctx.req && !token){
      ctx.res.writeHead(302, {
          Location : '/admin/login'
      })
      ctx.res.end();
      return
  }

  if(!token){
      Router.push('/admin/login');
  }
  return {
    token,
    user
  }
}