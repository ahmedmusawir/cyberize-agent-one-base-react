<?php
/**
 * The template for displaying 404 pages (not found)
 *
 * @link https://codex.wordpress.org/Creating_an_Error_404_Page
 *
 * @package cyberize
 */

get_header();
?>

<div id="error-404" class="content-area">
	<main id="main" class="site-main container">

		<div class="page-content text-center">

			<h1 class="page-title"><a href="/">404</a></h1>
			<h2>
				PAGE NOT FOUND
			</h2>
			<a class="btn btn-primary btn-lg" href="/">GO BACK</a>

			<!-- <div class="social mt-5 col-md-6 col-sm-6 col-6 mx-auto"> -->
				<?php // echo do_shortcode( '[Sassy_Social_Share title=""]' );  ?>
			<!-- </div> -->

		</div><!-- .page-content -->
	</main><!-- #main -->
</div><!-- #primary -->

<?php
get_footer();
