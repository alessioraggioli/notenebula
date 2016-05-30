/**
 * Created by Luca on 27/05/2016.
 */
//Si lo so che c'e' uploadService ma onde evitare casini faccio un altro servizio
routerApp.service('AwsService', function () {

    this.bucket;

    this.init = function(){
        AWS.config.update({accessKeyId: 'AKIAJWVPLIL77277XEZQ', secretAccessKey: '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'});
        AWS.config.region = 'eu-west-1';
        bucket = new AWS.S3({params: {Bucket: 'tsac-its'}});
    }

    this.getObjects = function(callback){
        bucket.listObjects(function (err, data) {
            if (err) {
                console.error("Errore caricamento oggetti aws");
                console.error(err);
            }
            callback(err, data);
        });
    }

    this.getObject = function(key, callback){
        bucket.getObject({Bucket: 'tsac-its', Key: key}, function(err, data) {
            if (err) {
                console.log(err, err.stack);
            }
            console.log(data);
            callback(err, data);
        });
    }

    this.upload = function(callback){
        var fileChooser = document.getElementById('file-chooser');
        var file = fileChooser.files[0];
        if (file) {
            var params = {Key: file.name, ContentType: file.type, Body: file};
            bucket.upload(params, function(err, data){callback(err, data);});
        }
        else {
            console.log("Non ce un cazzo");
            callback({porco:"porco"}, null);
        }
    }


});
