const d= document;
export default function userAgent(params) {
    
    console.log(window.navigator.userAgent);
    let isMovile = {
        ios : () => navigator.userAgent.match(/ipad|iphone|ipod/i),
        android : () => navigator.userAgent.match(/android/i),
        windows: () => navigator.userAgent.match(/Windows phone/i),
        any: function () { return this.android() || this.windows() || this.windows()}//validamos todos las funciones, no importa que SO es solo queremos saber si es movile
    }
    let isdesktop = {
        linux : () => navigator.userAgent.match(/linux/i),
        mac : () => navigator.userAgent.match(/mac os/i),
        windows: () => navigator.userAgent.match(/Windows nt/i),
        any: function () { return this.linux() || this.windows() || this.mac()}
    }
    let isbrowser = {
        chrome : () => navigator.userAgent.match(/chrome/i),
        safari : () => navigator.userAgent.match(/safari/i),
        firefox: () => navigator.userAgent.match(/firefox/i),
        opera : () => navigator.userAgent.match(/opera opera mini/i),
        edge: () => navigator.userAgent.match(/edge/i),
        any () { return this.android() || this.windows()}
    }
    console.log("desktop:", isdesktop.linux());
    console.log("movile: ",isMovile.any());
    console.log("desktop windows: ",isdesktop.windows());

}