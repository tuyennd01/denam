<?php
/**
 * The template for displaying header.
 *
 * @package HelloElementor
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

if ( ! hello_get_header_display() ) {
	return;
}

$is_editor = isset( $_GET['elementor-preview'] );
$site_name = get_bloginfo( 'name' );
$tagline   = get_bloginfo( 'description', 'display' );
$header_nav_menu = wp_nav_menu( [
	'theme_location' => 'menu-1',
	'fallback_cb' => false,
	'echo' => false,
] );
?>
<header id="site-header" class="site-header dynamic-header <?php echo esc_attr( hello_get_header_layout_class() ); ?>">
	<div class="header-inner">
		<div class="site-branding-pc flex">
      <img src="./wp-content/themes/hello-elementor/assets/images/logo.svg">
      <div class="header-item flex">
        <div class="header-menu">
          <ul class="menu-list-items param-font">
            <li class="menu-item">
              <a href="/">Bàn thờ thần tài</a>
            </li>
            <li class="menu-item">
              <a href="/">Bàn thờ gia tiên</a>
            </li>
            <li class="menu-item">
              <a href="/">Vách bàn thờ</a>
            </li>
            <li class="menu-item">
              <a href="/">Phong thuỷ bàn thờ</a>
            </li>
          </ul>
        </div>
        <div class="header-button flex">
          <a href="/" class="button-phone flex">
            <i class="fa-solid fa-phone"></i>
            <p>(+84) 988 615 885</p>
          </a>
          <a href="/" class="button-address flex">
            <p>Địa chỉ</p>
            <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
		</div>

	</div>
</header>
