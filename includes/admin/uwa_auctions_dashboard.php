<?php

/**
 * Ultimate WooCommerce Auction Pro Admin General Settings
 *
 * @package Ultimate WooCommerce Auction Pro
 * @author Nitesh Singh 
 * @since 1.0 
 *
 */ 
?>

<div class="uwa_main_setting wrap woocommerce">	
	<h1 class="uwa_admin_page_title">
				<?php _e( 'License & Addon', 'woo_ua' ); ?>
				<?php echo uwa_get_plugin_info_version(); ?>
				
	</h1>
	
	<?php
	$license = get_option('edd_uwa_auction_pro_license_key');
    $status = get_option('edd_uwa_auction_pro_license_status');
    ?>
    <div class="post-box-container uwa_main_setting_content">
      
        <form method="post" action="options.php" class='uwa_auction_setting_style'>

            <?php settings_fields('edd_uwa_auction_pro_license');
            ?>

            <table class="form-table">
               <tbody>
			    <tr class="uwa_heading">
						<th colspan="2"><?php _e('License Key', 'woo_ua' ); ?></th>
				</tr>
				<tr>
						<th scope="row"></th>	
						<td colspan=""><?php _e( 'Enter your Ultimate WooCommerce Auction PRO License Key below. Your key unlocks access to automatic updates, the add-on installer, and support. You can find your key on the My Account page on the <a href="https://getultimateauction.com/my-account/purchase-history/" target="blank">getultimateauction.net</a> site.', 'woo_ua' ); ?>		  
							
                        </td>			
				<tr>
						<th scope="row"><?php _e( 'Enter your license key', 'woo_ua' ); ?></th>	
						<td>					    
                        <input id="edd_uwa_auction_pro_license_key" name="edd_uwa_auction_pro_license_key" type="text" class="regular-text" value="<?php esc_attr_e($license);
                        ?>" />
						
						    <?php if ($status !== false && $status == 'valid') { ?>
                                
                             <?php wp_nonce_field('edd_uwa_auction_pro_nonce', 'edd_uwa_auction_pro_nonce');  ?>							 
                           <input type="submit" class="button-secondary" name="edd_uwa_auction_pro_license_deactivate" value="<?php  _e( 'Deactivate License', 'woo_ua' ); ?>"/>
                            <br>
                            <br>
					        <span style="color:green;" class="dashicons dashicons-yes" ></span>
							<span style="color:green;"><?php _e( 'Valid Key : Your license key has been successfully validated.', 'woo_ua' ); ?></span>

						   <?php
                                } else {
                                    wp_nonce_field('edd_uwa_auction_pro_nonce', 'edd_uwa_auction_pro_nonce');  ?>
                               <input type="submit" class="button-secondary" name="edd_uwa_auction_pro_license_activate" value="<?php  _e( 'Activate License', 'woo_ua' ); ?>"/>
                              <br>                            
							  <?php if($status == "invalid") { ?>
							 <span style="color:#9E0B0F;" class="dashicons dashicons-no" ></span> 
							  <span style="color:#9E0B0F;"><?php _e( 'Invalid or Expired Key : Please make sure you have entered the correct value and that your key is not expired.', 'woo_ua' ); ?></span>				 
							  <?php   }  ?>
							  
							  <?php   }  ?>	
							 
                        </td>
				</tr>	
                </tbody>
            </table>
            <?php //submit_button();  ?>

        </form>
		
		
	<!--addons list started here-->		
	<?php			
	$uwa_addons_list = uwa_all_addons_list(); 
	?>		
	<h2 class="uwa_addon_setting_title"><?php _e( 'Addons for Ultimate WooCommerce Auction PRO', 'woo_ua' ); ?>	</h2>	
	<div class="uws-addons-content">

		<div class="notice-card">
			<h2>Upgrade your license to Business or Unlimited & activate below add-ons.</h2>
				<a class="button button-primary"  href="https://auctionplugin.net/pricing/" target="_blank">View Pricing</a>
		</div>
		<!-- <img style="display:none" class="uwa_addons_ajax_loader" src="<?php echo UW_AUCTION_PRO_ASSETS_URL; ?>/images/ajax_loader.gif" alt="Loading..." />-->
			<div class="wp-list-table widefat uws-addons">		
			
			<?php if ( $uwa_addons_list ) { ?>			
			 <?php foreach ( $uwa_addons_list as $slug => $addon ){ ?>
				<?php $checked ="";?>
				<div class="plugin-card">
                    <div class="plugin-card-top">
                        <div class="name column-name">
                            <h3>
                                <span class="plugin-name"><?php echo $addon['name']; ?></span>
                                <img class="plugin-icon" src="<?php echo UW_AUCTION_PRO_ASSETS_URL . '/images/addons/' . $addon['thumbnail'] ?>" alt="" />
                            </h3>
                        </div>

                        <div class="action-links">
						
                        <ul class="plugin-action-buttons">
                           <li data-addon="<?php echo $addon['slug']; ?>">                                    
						   <a class="install-now button"  href="https://auctionplugin.net/pricing/" target="_blank" >Upgrade to Business Plan</a>									
                            </li>
							<li><a href="https://auctionplugin.net/pricing/" target="_blank">More Details</a></li>
                        </ul>
                        </div>

                        <div class="desc column-description">
                            <p>
                                <?php echo $addon['description']; ?>
                            </p>
							
                        </div>
                    </div>
                </div>
				<?php } ?>
			
			<?php } ?>
				
				
			</div>
			
		</div>	
		
	</div>
</div>