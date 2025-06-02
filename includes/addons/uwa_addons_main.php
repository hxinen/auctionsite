<?php

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Ultimate WooCommerce Auction Pro - ADDON
 *
 * @package Ultimate WooCommerce Auction Pro
 * @author Nitesh Singh 
 * @since 1.0
 *
 */ 

function uwa_all_addons_list() {
	$uwa_all_addons_list =  array('uwa_addons' =>
		array(
			'slug' => _x( 'uwa_buyers_premium_addon', 'Addon Slug', 'woo_ua' ),
			'name' => _x( "Buyer's Premium", 'Addon Name', 'woo_ua' ),
			'description' => _x( "Charge a premium amount over and above Bid Amount for admin or auction owner.", 'Addon Description', 'woo_ua' ),
			'thumbnail' => _x( 'uwa_buyers_premium_addon.jpg', 'Addon Thumbnail', 
				'woo_ua' )),
			 
		array(
			'slug' => _x( 'uwa_stripe_auto_debit_addon', 'Addon Slug', 'woo_ua' ),
			'name' => _x( 'Credit Card Auto Debit', 'Addon Name', 'woo_ua' ),
			'description' => _x( 'Collect User Credit Card on registration and 
				automatically debit winning amount and transfer to Stripe Account of auction 
				owner.', 'Addon Description', 'woo_ua' ),
			'thumbnail' => _x( 'stripe.jpg', 'Addon Thumbnail', 'woo_ua' )),
			 
		array(
			'slug' => _x( 'uwa_twilio_sms_addon', 'Addon Slug', 'woo_ua' ),
			'name' => _x( 'SMS Notification', 'Addon Name', 'woo_ua' ),
			'description' => _x( 'Send SMS notification for bid, outbid, won and ending soon using Twilio.', 'Addon Description', 'woo_ua' ),
			'thumbnail' => _x( 'Twilio_SMS.jpg', 'Addon Thumbnail', 'woo_ua' )),
	

		array(
			'slug' => _x( 'uwa_offline_dealing_addon', 'Addon Slug', 'woo_ua' ),
			'name' => _x( 'Offline Dealing for Buyer & Seller', 'Addon Name', 'woo_ua' ),
			'description' => _x( 'Exchange contact details of each other and settle your auction offline.', 'woo_ua' ),
			'thumbnail' => _x( 'offline_dealing.jpg', 'Addon Thumbnail', 'woo_ua' ))
		);
		 
    return $uwa_all_addons_list;
}