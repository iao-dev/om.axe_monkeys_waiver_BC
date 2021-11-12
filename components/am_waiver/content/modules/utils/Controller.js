class Controller {
    updateBucket(params) {
       return new Promise((accept, reject) => {
            new Component('am_waiver')
                .ajax('updateBucket', params, {
                    callback: (response) => {
						console.log(params)
                    },
                    // Able to hide page overlay loading indicator
                    hideLoading: false,
            });
        });
    }
}

module.exports = Controller;
