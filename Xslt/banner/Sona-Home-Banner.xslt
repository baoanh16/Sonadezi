<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
	xmlns:msxsl="urn:schemas-microsoft-com:xslt" exclude-result-prefixes="msxsl">
	<xsl:output method="html" indent="yes" />

	<xsl:template match="/">
		<div class="home-banner">
			<div class="swiper-container">
				<div class="swiper-wrapper">
					<div class="swiper-slide video">
						<video autoplay="" muted="" src="/Data/Sites/1/media/video.mp4"></video>
					</div>
					<xsl:apply-templates select="/BannerList/Banner"></xsl:apply-templates>
				</div>
				<div class="swiper-pagination container"></div>
			</div>
			<div class="banner-icon">
				<img src="/Data/Sites/1/skins/default/img/banner_icon_2.png" alt="" />
			</div>
			<div class="swiper-next-button"></div>
		</div>
	</xsl:template>

	<xsl:template match="Banner">
		<div class="swiper-slide">
			<a rel="nofollow" target="_self">
				<xsl:attribute name="href">
					<xsl:value-of select="Url"></xsl:value-of>
				</xsl:attribute>
				<!-- <xsl:attribute name="style">
					<xsl:text>background-image: url("</xsl:text>
					<xsl:value-of select="ImageUrl"></xsl:value-of>
					<xsl:text>")</xsl:text>
				</xsl:attribute> -->
				<img class="mobile">
				<xsl:attribute name="src">
					<xsl:value-of select="ThumbnailUrl"></xsl:value-of>
				</xsl:attribute>
				<xsl:attribute name="alt">
					<xsl:value-of select="Title"></xsl:value-of>
				</xsl:attribute>
				</img>
				<img class="desktop">
				<xsl:attribute name="src">
					<xsl:value-of select="ImageUrl"></xsl:value-of>
				</xsl:attribute>
				<xsl:attribute name="alt">
					<xsl:value-of select="Title"></xsl:value-of>
				</xsl:attribute>
				</img>
			</a>
			<div class="container">
				<div class="caption">
					<xsl:value-of select="Description" disable-output-escaping="yes"></xsl:value-of>
				</div>
			</div>
		</div>
	</xsl:template>
</xsl:stylesheet>
<!-- <?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
	xmlns:msxsl="urn:schemas-microsoft-com:xslt" exclude-result-prefixes="msxsl">
	<xsl:output method="html" indent="yes" />

	<xsl:template match="/">
		<div class="home-banner">
			<div class="rev_slider_wrapper">
				<div class="rev-slider">
					<ul>
						<xsl:apply-templates select="/BannerList/Banner"></xsl:apply-templates>
					</ul>
				</div>
			</div>
			<div class="banner-icon"><img src="/Data/Sites/1/skins/default/img/banner_icon_2.png" /></div>
		</div>
	</xsl:template>

	<xsl:template match="Banner">
		<li data-transition="scaledownfromleft" data-param1="1">
			<xsl:attribute name="data-param1">
				<xsl:value-of select="position()" disable-output-escaping="yes"></xsl:value-of>
			</xsl:attribute>
			<img>
			<xsl:attribute name="src">
				<xsl:value-of select="ImageUrl"></xsl:value-of>
			</xsl:attribute>
			<xsl:attribute name="alt">
				<xsl:value-of select="Title"></xsl:value-of>
			</xsl:attribute>
			</img>
			<div class="tp-caption tp-resizeme largewhitebg" data-x="center" data-y="center" data-hoffset="25%"
				data-voffset="25%">
				<xsl:attribute name="data-width">
					<xsl:text>100%</xsl:text>
				</xsl:attribute>
				<xsl:attribute name="data-height">
					<xsl:text>100%</xsl:text>
				</xsl:attribute>
				<xsl:value-of select="Description" disable-output-escaping="yes"></xsl:value-of>
			</div>
		</li>
	</xsl:template>
</xsl:stylesheet> -->