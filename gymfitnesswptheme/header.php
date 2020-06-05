<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <?php wp_head(); ?>
  </head>
  <body <?php body_class(); ?>>

<header class="site-header">
  <div class="container header-grid">
    <div class="navigation-bar">
      <div class="logo">
        <a href="<?php echo home_url(); ?>">
          <img src="<?php echo get_template_directory_uri() . "/img/logo.svg" ?>" alt="Site logo">
        </a>
      </div><!--.logo-->

      <?php  
      
          $args = array(
              'theme_location' => 'main-menu',
              'container' => 'nav',
              'container_class' => 'main-menu'
          );
          wp_nav_menu($args);

      ?> 
    </div><!--.navigation-bar-->
  </div><!--.container-->
</header>
