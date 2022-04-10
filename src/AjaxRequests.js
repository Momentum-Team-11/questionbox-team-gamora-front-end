export const requestLogin = (username, password) => {
    //I can replace this with a real AJAX request once I have a live URL
    return fakeAjaxLoginRequest(username, password)
  }

export const requestReg = (username, password, retypePassword) => {
  return fakeAjaxRegRequest(username, password, retypePassword);
  };
  
  function fakeAjaxLoginRequest(username, password) {
    return new Promise((resolve, reject) => {
      if (username && password) {
        resolve({ auth_token: 'faketoken123456789' })
      }
      reject(new Error('Authentication failed! 🥝 '))
    })
  }

  function fakeAjaxRegRequest(username, password, retypePassword) {
    return new Promise((resolve, reject) => {
      if (username && password && retypePassword) {
        resolve({ auth_token: 'faketoken123456789' });
      }
      reject(new Error('Registration failed!'));
    });
  }