<?php
/**
 * Template Name: Page w Right Sidebar
 *
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package Moose_Framework_2
 */

get_header(); ?>

<style type="text/css">
	#general-blog-page-header {
		width: 100vw;
		height: 450px;
		background-image: url('<?php echo get_field('blog_page_header_image', 'option')['url'] ?>');
		background-size: cover;
		background-position: top center;
		padding: 13rem 15px 0px;
		margin-bottom: 60px;
	}

</style>

<!-- Page Header with image -->
<section id="general-blog-page-header">
	<div class="container-fluid">
		<h1 class="text-center pt-5"><?php wp_title(''); ?></h1>
	</div>
</section>


<div id="page-melissa" class="content-area container mt-5 pb-5">
	<div class="row">
		
		<main id="main" class="site-main col-sm-12 col-md-12 col-lg-8">

			<?php
			while ( have_posts() ) : the_post();

				get_template_part( 'template-parts/content', 'page' );

				// If comments are open or we have at least one comment, load up the comment template.
				if ( comments_open() || get_comments_number() ) :
					comments_template();
				endif;

			endwhile; // End of the loop.
			?>

		</main><!-- #main -->

		<div class="col-sm-12 col-md-12 col-lg-4">

			<?php get_sidebar(); ?>
			
		</div>	
		
	</div> <!-- END ROW -->
</div><!-- #primary -->

<?php
get_footer();
