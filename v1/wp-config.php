<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wp_modalnetw' );

/** MySQL database username */
define( 'DB_USER', 'wp_modalnetw' );

/** MySQL database password */
define( 'DB_PASSWORD', 'Mdl@2021..' );

/** MySQL hostname */
define( 'DB_HOST', 'wp_modalnetw.mysql.dbaas.com.br' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'gS?Ng9&BDm!VFC42HP(&4/%yGc/ynSocw(,q0`~|35w15KX$~lIz1ZQpdl[Q`1%|' );
define( 'SECURE_AUTH_KEY',  'BL=Si].+Uw+,;3^[Rzei<vuawtw3Y_#-OlnAdYtm0@U0ONO|Ot&|#S[ (0^e.aaY' );
define( 'LOGGED_IN_KEY',    ';R%BBYLyYpT@]?w=>J8MT [V@zb&KmaNPn,9b7cq#x,{Y 8+ve2DV>q^%{ndj2U}' );
define( 'NONCE_KEY',        '|%]0mhNv@EY{!83vf2RCq-b^/Qi2.WLzW*1C!*mFmZ6]82(Xp~MN~2`}g3A-]dn=' );
define( 'AUTH_SALT',        'mKUYwCWsafQ{H6$ZS!tVuC<{sZ*927Wqq20(;_a6}xoq{l`PMXZ>oX4R%8 P$<i[' );
define( 'SECURE_AUTH_SALT', '_* %$WZ!p(?(U(g*k^u3;tmP2sVV^,-Lzc,w_</Z<7^pL#4kQWt^y? ev;K>80]`' );
define( 'LOGGED_IN_SALT',   '<1cOq 01~i% HQt( o@^B-=NjzvDW}v0vTM$</u+(?o]*_3u,.(k+`hY|soyoq#c' );
define( 'NONCE_SALT',       '-{j,y&Dk9ruCS< y*v36-qfvT1dGG6{HpKLn6m6cdZ<8kE&E+^wq0>%l>d3&(+7?' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_modalnetw_';

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
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
