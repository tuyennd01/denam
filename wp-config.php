<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'danam' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'x8^c`Ayu#M#:,M^P?F(i ot%p0LsWi&4Sm8dFR%xfzY=KcG8!{0dDT>XMo3-D<tC' );
define( 'SECURE_AUTH_KEY',  '|$V{l&oFS55nO&rcK:N>*$~8:[7ML,Kun}<daJ:}H,^*I67`U.)*9cw]|ZzO(lE%' );
define( 'LOGGED_IN_KEY',    '*bdx>UZIl^#>V@E(zY0_8Wo[:+0|^)gktQ9,Pl$OA!&]P./:^BqIF,`:w?P{(H_~' );
define( 'NONCE_KEY',        '3F%-^$Ju4Tod)kl,x?@S7c80`69o#^M5oIr=?0ee1ODPB4tx&`]lX`3BZ=pYh;_<' );
define( 'AUTH_SALT',        'z^];nc{_5e.ZEo5d3lBWvgcwxH 7(Wu0ztz6dZc~ HJVRq=MulP`L]GG(#[{||g8' );
define( 'SECURE_AUTH_SALT', 'banuh|_AkGy] ~G gAN$?Yp;^!;)6t80o@spr ;O,=YeZqe!1M{Whk|CwgegE=cg' );
define( 'LOGGED_IN_SALT',   'w>R2u3I^(b.0X9^d`P}<jjL[I*UHV!;5,]zvA2qb3w&[qA(3^<i){Yn+><*&%Hs0' );
define( 'NONCE_SALT',       'p$:?fM>~CZAg1YM7e?0T$86tLb-F%=Yr6c{ZOf^G=ucgUIT:4%?[{kH$p3bH_oG ' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
