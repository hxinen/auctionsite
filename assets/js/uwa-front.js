jQuery(document).ready(function($){

	Uwa_ajax_url = WooUa.ajaxurl;
	Uwa_last_activity = WooUa.last_timestamp;

	/* Ajax query String */
	Ajax_qry_str = UWA_Ajax_Qry.ajaqry;
	running = false;

	/* Interval refresh page */	
	var refresh_time_interval = '';
	if(uwa_data.refresh_interval){
		refresh_time_interval =  setInterval(function(){
	    	getLiveStatusAuction();
    	}, uwa_data.refresh_interval*1000);
	}

 
function changeTimezone(date, ianatz) {
 
		  var invdate = new Date(date.toLocaleString('en-US', {
			timeZone: ianatz
		  }));
  
		  var diff = date.getTime() - invdate.getTime();

		
		  return new Date(date.getTime() + diff);

		}
function ahead5Mins() { 
	var server = new Date(servertime); 
    server.setMinutes(server.getMinutes()); 
    return server; 
}

function getKeyByValue(object, value) {
 
   for (var prop in object) { 
		if (object.hasOwnProperty(prop)) { 
			if (object[prop] === value) {
				 
			return prop; 
			}
		} 
	} 
}
 
	$('form.cart').submit(function() {
		clearInterval(refresh_time_interval);
	});


	$( "input[name=wua_bid_value]" ).on('changein', function( event ) {
	 	$(this).addClass('changein');
	});

	$( ".uwa_more_details a" ).on('click', function(e){
		e.preventDefault();
		$('.uwa_more_details_display').slideToggle('fast');
	});

	/* --------------------------------------------------------
	 Add / Remove Watchlist
	----------------------------------------------------------- */

	$( ".uwa-watchlist-action" ).on('click', watchlist);

	function watchlist( event ) {

		var auction_id = jQuery(this).data('auction-id');
		var currentelement  =  $(this);

			jQuery.ajax({
				type : "get",
				url : Uwa_ajax_url,
				data : { post_id : auction_id, 'uwa-ajax' : "watchlist"},
				success: function(response) {
					currentelement.parent().replaceWith(response);
				    $( ".uwa-watchlist-action" ).on('click', watchlist);
				    jQuery( document.body).trigger('uwa-watchlist-action',[response,auction_id] );
				}
	      	});
	}

	/* --------------------------------------------------------
	Send Private Message
	----------------------------------------------------------- */

	$( document ).on( 'click', 'button#uwa_private_send', function() {
		var error = 0;
		var thisObj = $(this);
		var private_msg_form = $('#uwa_private_msg_form');
		
		/* collect the data */           
		var firstnameObj	= private_msg_form.find( '.uwa_pri_name' );
		var firstname 		= firstnameObj.val();
		var emailObj 		= private_msg_form.find( '.uwa_pri_email' );
		var email 			= emailObj.val();
		var messageObj 		= private_msg_form.find( '.uwa_pri_message' );
		var message 		= messageObj.val();
		var product_idObj 		= private_msg_form.find( '.uwa_pri_product_id' );
		var product_id 		= product_idObj.val();

		if( error == 0 ) {

			/* Hide / show for ajax loader */
			thisObj.hide();
			private_msg_form.find( 'img.uwa_private_msg_ajax_loader' ).show();	

			var data = {
						action: 	'send_private_message_process',
						firstname: 		firstname,
						email: 		    email,
						message: 		message,
						product_id: 	product_id,
					}

			$.post( Uwa_ajax_url, data, function(response) {

				var data = $.parseJSON( response );                       

				if( data.status == 0 ) {
					if (data.error_name) {
						private_msg_form.find( '#error_fname' ).html( data.error_name );
					}else {
						private_msg_form.find( '#error_fname' ).html( "" );
					}

					if (data.error_email) {
						private_msg_form.find( '#error_email' ).html( data.error_email );
					}else {
						private_msg_form.find( '#error_email' ).html( "" );
					}

					if (data.error_message) {
						private_msg_form.find( '#error_message' ).html( data.error_message );
					}else {
						private_msg_form.find( '#error_message' ).html( "" );
					}
				} else {
					private_msg_form.find( '#error_message' ).html( "" );
					private_msg_form.find( '#error_fname' ).html( "" );
					private_msg_form.find( '#error_email' ).html( "" );
					private_msg_form.find( '#uwa_private_msg_success' ).html( data.success_message );
				}

				/* Hide / show for ajax loader */

					thisObj.show();
					private_msg_form.find( 'img.uwa_private_msg_ajax_loader' ).hide();
			});
		}

		return false;
	});
	
	/* --------------------------------------------------------
	 Bidding on shop
	----------------------------------------------------------- */

	$( document ).on( 'click', 'button.uwa_quickbid', function() {
     	var auctionid = $(this).attr("dataauctionid");
		$(".uwa_bidding_on_shop_"+auctionid).toggle();
	});

	$( document ).on( 'click', 'button.shopbid', function() {
		var auctionid = $(this).attr("dataauctionid");
		var bid_value = $(".shopbidvalue_"+auctionid).val();
		
		var data = {
					action: 	'uwa_auction_ajax_add_bid',
					product_id: auctionid,
					bid_value: 	bid_value,				
				}

		$.post( Uwa_ajax_url, data, function(response) {	
			var data = $.parseJSON( response );
			if( data.status == 0 ) { 
				alert(data.msg_error);
			}
			else {
				alert(data.msg_success);
			}
		});	
	
    	return false;
	});
	
	// CheckExpired(); /* no need for this */

}); /* end of document ready */

function CheckExpired(){

		var auctionid = jQuery(this).data('auction-id');
		var uwa_container = jQuery(this).parent().next('.uwa_auction_product_ajax_change'); 
		uwa_container.empty().prepend('<div class="ajax-loading"></div>');
		uwa_container.parent().children('form.buy-now').remove();
		var scheduled = jQuery(this).hasClass('scheduled') ? 'true' : 'false';
		var ajaxurl = Ajax_qry_str+'=expired_auction';

		request =  jQuery.ajax({
			type: "post",
			url: ajaxurl,
			cache: false,
			data: {
				action: "expired_auction",
				post_id: auctionid,
				ret: uwa_container.length,
				scheduled: scheduled,				
			},
			success: function(response) {
				console.log("asset js ");
     			if (response.length  != 0){ 
					console.log("asset js 1");
					uwa_container.children('.ajax-loading').remove();
     				uwa_container.prepend(response);    
					if(uwa_data.reload_page == "yes"){
						location.reload();
					}      				
     			}
	        }
	    });

} /* end of function - checkexpired */


function getLiveStatusAuction() {
	
	if(jQuery('.woo-ua-auction-price').length<1){
        return;
    }

	if (running == true){
    	return;
    }

	running = true;
	var ajaxurl = Ajax_qry_str+'=get_live_stutus_auction'; 
	jQuery.ajax({
		type : "post",
		encoding:"UTF-8",
		url : ajaxurl,
		dataType: 'json',
		data : {action: "get_live_stutus_auction", "last_timestamp" : Uwa_last_activity},
		success: function(response)	{			
			
			if(response != null ) {

					//alert(JSON.stringify(response));

				if (typeof response.last_timestamp != 'undefined') {
					Uwa_last_activity = response.last_timestamp;
				}

				jQuery.each( response, function( key, value ) {
					
					if( key  >  0 ){	/* loop is for auctions only so here key must be auctionid */
						
					if(jQuery('.btn_refresh').length != 1) {	
						
					 
					 if(uwa_data.antisniping_check=='yes'){
						
						if(value.wua_current_bider!= value.wua_loggedin_userid && value.wua_loggedin_userid!=0){
							
							 
							if(uwa_data.anti_sniping_timer_update_noti=="auto_page_refresh" || uwa_data.anti_sniping_timer_update_noti==""){
								jQuery('#uwa_auction_countdown').html('<div class="refresh_msg"> <span class="refresh-msg-text">'+uwa_data.anti_sniping_timer_update_noti_msg+'</span></div>');
								
								setTimeout(function(){ 
									location.reload();
								},5000);
							}
							
							
							if(uwa_data.anti_sniping_timer_update_noti=="manual_page_refresh"){
								jQuery('#uwa_auction_countdown').html('<div class="refresh_msg"> <span class="refresh-msg-text">'+uwa_data.anti_sniping_timer_update_noti_msg+'</span><a href="javascript:;" onclick="location.reload();" class="btn_refresh">Refresh</a></div>');
							}
							
						}
						
					 }
					}
											
						var testclass = jQuery("body").hasClass( "postid-"+key );

							/* auction price */
							var price_len = jQuery("body").find(".woo-ua-auction-price[data-auction-id='" + key + "']").length;
								
							if(price_len > 0){
								if (typeof value.wua_curent_bid != 'undefined') {
									auction = jQuery("body").find(".woo-ua-auction-price[data-auction-id='" + key + "']");
									auction.replaceWith(value.wua_curent_bid);
								}
							}

							/* wining and losing text -- all site pages */	
							/* text over image  and text above timer */

							if (typeof value.wua_uwa_imgtext != 'undefined' && typeof value.wua_uwa_detailtext != 'undefined') {
								if (value.wua_loggedin_userid > 0 ) {	

									var login_userid  = jQuery("span.uwa_imgtext").attr("data-user_id");
									if(value.wua_loggedin_userid == login_userid){
										jQuery("span.uwa_imgtext[data-auction_id='"+key+"']" ).html(value.wua_uwa_imgtext);
										jQuery("p.uwa_detailtext[data-auction_id='"+key+"']" ).html(value.wua_uwa_detailtext);
									}
								}
							}

							/* display winning information */
							
							if (typeof value.wua_winuser != 'undefined' ) {					

								jQuery("div.winner-name[data-auction_id='"+key+"']" ).html(value.wua_winuser);
							}	

							/* countdown timer */	
							
							if (typeof value.wua_timer != 'undefined') {
								var curenttimer = jQuery("div.uwa_auction_product_countdown[data-auction-id='" + key + "']");
																				
									var auction_oldtime = curenttimer.attr('data-time');
									var auction_newtime = value.wua_timer;
																							
									if(auction_oldtime != auction_newtime){
										
										//alert("old time is " + auction_oldtime +  "new time is" + auction_newtime);
										
											/* set newtime */
										curenttimer.attr('data-time', auction_newtime );																					
										
											/* change time in timer */
										var time1 = auction_newtime;
																						
									}
							}	


						if(testclass == true){
																			

									if (typeof value.wua_current_bider != 'undefined' ) {
										var currentuser = jQuery("input[name=user_id]");
										var mainauction = jQuery("input[name=uwa-place-bid]").val();
										if (currentuser.length){
											if(value.wua_current_bider != currentuser.val() && mainauction == key ) {
												if(value.wua_auctionproxy == 'yes'){
													
												 	if (jQuery('.woocommerce-error').length > 0) {
														jQuery('.woocommerce-message').hide();
														jQuery('.woocommerce-error').replaceWith(uwa_data.outbid_message );
													} else{
														jQuery('.woocommerce-message').replaceWith(uwa_data.outbid_message);
													}

												} else {
													
													jQuery('.woocommerce-message').replaceWith(uwa_data.outbid_message);
												}
											}
										}
										if(jQuery( "span.uwa_winning[data-auction_id='"+key+"']" ).attr('data-user_id') != value.wua_current_bider){
											jQuery( "span.uwa_winning[data-auction_id='"+key+"']" ).remove()
										}
									}
									
									if (typeof value.wua_bid_value != 'undefined' ) {
										if(!jQuery( "input[name=uwa_bid_value][data-auction-id='"+key+"']" ).hasClass('wuachangedin')){
											/* jQuery( "input[name=uwa_bid_value][data-auction-id='"+key+"']" ).val(value.wua_bid_value).removeClass('wuachangedin'); */
										}

										jQuery( "input[name=quick_uwa_bid_value][data-auction-id='"+key+"']" ).val(value.wua_bid_value);
										console.log(value.wua_bid_value);	
										
										/* set direct bid value in textbox */
										if(value.wua_auctiontype == 'reverse'){
											jQuery("input[id=uwa_bid_value_direct][data-auction-id='"+key+"']" ).val(value.wua_bid_value);
										}				
									}

									if (typeof value.wua_bid_value_inc != 'undefined' ) {									

										jQuery( ".uwa_inc_price_ajax_"+key ).html(value.wua_bid_value_inc + " )");			

									}			
									
									if (typeof value.wua_next_bids != 'undefined' ) {									

										/* next bids drop down */
										jQuery( "select[id=uwa_bid_value_direct][data-auction-id='"+key+"']" ).html(value.wua_next_bids);
									}
									
									if (typeof value.wua_reserve != 'undefined' ) {					

										jQuery( ".checkreserve" ).html("<p>" + value.wua_reserve + "</p>");
									}		
									

									if (typeof value.add_to_cart_text != 'undefined' ) {

										jQuery( "a.button.product_type_auction[data-product_id='"+key+"']" ).text(value.add_to_cart_text);

									}
									
									if (typeof value.wua_activity != 'undefined' ) {

										/*jQuery("#auction-history-table-" + key +" tbody > tr:first" ).before(value.wua_activity);*/
										/*jQuery("div.uwa_bids_history_data[data-auction-id='"+key+"']").html(value.wua_activity + "--by instant");*/
										jQuery("div[class=uwa_bids_history_data][data-auction-id='"+key+"']").html("");
										//jQuery("div[class=uwa_bids_history_data][data-auction-id='"+key+"']").html(value.wua_activity);
										//jQuery("div[class=uwa_bids_history_data][data-auction-id='"+key+"']").html(value.wua_activity + "--by instant");
										jQuery("div[class=uwa_bids_history_data][data-auction-id='"+key+"']").html(value.wua_activity);
										
									}
						
									if (typeof value.wua_buynow != 'undefined' ) {
							

									if(value.wua_buynow != "yes"){
										
										jQuery("form.buy-now[data-product_id='"+key+"'] .single_add_to_cart_button").css("display", 
									"none"); 	

									}
									else{
										
										jQuery("form.buy-now[data-product_id='"+key+"'] .single_add_to_cart_button").css("display", 
									
									"inline-block"); 

									}
									
								}		
							
						} /* end of if - string to check */
						
					} /* end of if - key > 0  */
					
				});	
			}
	        running = false;
		},

		error: function() {
			running = false;
		}

	});	 



} /* end of function - getLiveStatusAuction */