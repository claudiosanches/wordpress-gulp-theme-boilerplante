<?php get_header(); ?>

	<div id="primary">
		<div id="content" class="site-content" role="main">

			<?php
				if ( have_posts() ) :
					while ( have_posts() ) : the_post(); ?>
						<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
							<header class="entry-header">
								<h2><a href="<?php the_permalink() ?>" rel="bookmark" title="<?php _e( 'Permanent Link to', 'textdomain' ); ?> <?php the_title_attribute(); ?>"><?php the_title(); ?></a></h2>
								<div class="entry-meta">
									<small><?php the_time( 'F jS, Y' ) ?> <?php _e( 'by', 'textdomain' ) ?> <?php the_author_posts_link() ?></small>
								</div>
							</header>

							<div class="entry-content">
								<?php the_content(); ?>
							</div>
							<footer class="entry-meta">
								<?php if ( in_array( 'category', get_object_taxonomies( get_post_type() ) ) ) : ?>
									<span class="cat-links"><?php echo __( 'Posted in:', 'textdomain' ) . ' ' . get_the_category_list( _x( ', ', 'Used between list items, there is a space after the comma.', 'textdomain' ) ); ?></span>
								<?php endif; ?>
								<?php the_tags( '<span class="tag-links">' . __( 'Tagged as:', 'textdomain' ) . ' ', ', ', '</span>' ); ?>
								<?php if ( ! post_password_required() && ( comments_open() || get_comments_number() ) ) : ?>
									<span class="comments-link"><?php comments_popup_link( __( 'Leave a comment', 'textdomain' ), __( '1 Comment', 'textdomain' ), __( '% Comments', 'textdomain' ) ); ?></span>
								<?php endif; ?>
							</footer>
						</article>
					<?php endwhile; ?>

					<div class="navigation"><p><?php posts_nav_link(); ?></p></div>

				<?php else : ?>
					<p><?php _e( 'Sorry, no posts matched your criteria.', 'textdomain' ) ?></p>
				<?php endif; ?>

		</div><!-- #content -->
	</div><!-- #primary -->

<?php
get_footer();
