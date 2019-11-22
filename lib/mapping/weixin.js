

module.exports = profile => {
  console.log('weixin-mappings:InputProfile==='+JSON.stringify(profile))

  if ('string' == typeof profile) {
    profile = JSON.parse(profile);
  }

  var newProfile = {};
  newProfile.uid = String(profile.unionid);
  newProfile.displayName = profile.nickname;
  newProfile.profileUrl = profile.headimgurl;
  if (profile.email) {
    newProfile.emails = [{
      value: profile.email
    }];
  }

  return newProfile;

}

