import UrlParser from '../routes/url-parser';
import Confirm from '../utils/confirm-initiator';

document.addEventListener("deviceready", () => {
    document.addEventListener("backbutton", onBackKeyDown, false);

    var permissions = cordova.plugins.permissions;
    
    permissions.hasPermission(permissions.CAMERA, function( status ) {
        if ( !status.hasPermission ) {
            permissions.requestPermission(permissions.CAMERA, success, error);
 
            function error() {
                alert('Camera permission is not turned on');
            }
            
            function success( status ) {
                if ( !status.hasPermission ) error();
            }
        }
    });
});

function onBackKeyDown() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    if (url === '/' || url === '/home') {
        Confirm.show('Tutup Aplikasi?', () => navigator.app.exitApp(), () => {});
    }
    return;
}