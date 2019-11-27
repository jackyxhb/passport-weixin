

module.exports = profile => {


  var mappedProfile = {
    uid: profile._json.openid,
    nickname: profile._json.nickname,
    gender: profile._json.sex,
    picture: profile._json.headimgurl,
    locale: profile._json.language,
    c: profile._json.country,
    st: profile._json.province,
    l: profile._json.city,
    role: profile._json.privilege
  };

  if (profile._json.email) {
    mappedProfile.mail = profile._json.email;
  }

  return mappedProfile;
};

