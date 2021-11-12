var bucketQry = Class.create( {
    initialize: function() {
        
    },

    updateBucket: function(params) {
		/*
		var fr = new FRecord(name);
        fr.search();
        while (fr.next()) {
          console.log  ('Found user - ' + fr.firstname + 'x_x ' );
            
        } 
		return fr.toJSON();
		*/
		var fr = new FRecord('signed_waiver');
		fr.first_name = params.first_name;
		fr.last_name = params.last_name;
		fr.phone = params.phone;
		fr.bay = params.bay;
		fr.minor_1 = params.minor_1;
		fr.minor_2 = params.minor_2;
		fr.minor_3 = params.minor_3;
		fr.minor_4 = params.minor_4;
		fr.minor_5 = params.minor_5;
		fr.minor_6 = params.minor_6;

		fr.insert();
    }
});

module.exports = bucketQry;
