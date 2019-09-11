<?php
/**
 *
 * MODULE: Blog Index Melissa
 *
 */
?>

<style type="text/css">
	#general-blog-page-header {
		width: 100vw;
		height: 320px;
		background-color: rgba(189, 198, 18, .55);
		background-image: url('<?php echo get_field('blog_page_header_image', 'option')['url'] ?>');
		background-size: cover;
		background-position: top center;
		padding: 13rem 15px 0px;
		margin-bottom: 60px;
	}
</style>

<main id="" class="blog-index-block-melissa">

	<div id="primary" class="content-area">
		<main id="main" class="site-main">

			<!-- Page Header with image -->
			<section id="general-blog-page-header">
				<div class="container-fluid">
					<h1><?php the_field('blog_index_title', 'option') ?></h1>
				</div>
			</section>

			<section class="container">

				<div class="row">

					<div class="col-sm-12 col-md-12 col-lg-12">

						<article class="post-item-container" >

							<?php
								if ( have_posts() ) :

									if ( is_home() && ! is_front_page() ) : ?>
										<header>
											<h1 class="page-title screen-reader-text"><?php single_post_title(); ?></h1>
										</header>

									<?php
									endif;
									?>
									<div class="">
									<?php
									/* Start the Loop */
									while ( have_posts() ) : the_post();

										/*
										 * Include the Post-Format-specific template for the content.
										 * If you want to override this in a child theme, then include a file
										 * called content-___.php (where ___ is the Post Format name) and that will be used instead.
										 */
										get_template_part( 'template-parts/content', 'post-item-freeman' );

									endwhile;

									?>
									</div>
									<div class="post-nav-holder col-12"><?php the_posts_navigation(); ?></div>
									<?php

								else :

									get_template_part( 'template-parts/content', 'none' );

								endif;
							?>

						</article>

					</div> <!-- 12 COLS END -->

				</div> <!-- ROW END -->

			</section>

		</main><!-- #main -->
	</div><!-- #primary -->


</main>
