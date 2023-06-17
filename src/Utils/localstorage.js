import CryptoJS from 'crypto-js';

export const setAuthentication = (token, name, nip, email) => {
    localStorage.setItem('kpjtik_access_token', token)
    localStorage.setItem('kpjtik_acc_name', CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(name), process.env.VUE_APP_SECRET_KEY))
    localStorage.setItem('kpjtik_nip', CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(nip), process.env.VUE_APP_SECRET_KEY))
    localStorage.setItem('kpjtik_email', CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(email), process.env.VUE_APP_SECRET_KEY))
}

export const getToken = () => localStorage.getItem('kpjtik_access_token') || ''
export const getName = () => {
    const getName = localStorage.getItem('kpjtik_acc_name') || ''
    let bytes = CryptoJS.AES.decrypt(
        getName,
        process.env.VUE_APP_SECRET_KEY
    );
    const name = bytes.toString(CryptoJS.enc.Utf8)
    return name
}
export const getNimUser = () => {
    const getNip = localStorage.getItem('kpjtik_nip') || ''
    let bytes = CryptoJS.AES.decrypt(
        getNip,
        process.env.VUE_APP_SECRET_KEY
    );
    const nim = bytes.toString(CryptoJS.enc.Utf8)
    return nim
}
export const getEmail = () => {
    const getMail = localStorage.getItem('kpjtik_email' || '')
    let bytes = CryptoJS.AES.decrypt(
        getMail,
        process.env.VUE_APP_SECRET_KEY
    );
    const email = bytes.toString(CryptoJS.enc.Utf8)
    return email
}
export const removeAuth = () => {
    localStorage.removeItem('kpjtik_access_token')
    localStorage.removeItem('kpjtik_acc_name')
    localStorage.removeItem('kpjtik_nip')
    localStorage.removeItem('kpjtik_email')
    // Cookies.remove('hk_marker')
    // removeNotif()
}
