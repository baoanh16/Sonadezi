<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:msxsl="urn:schemas-microsoft-com:xslt"
 exclude-result-prefixes="msxsl">
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
		</li>
	</xsl:template>
</xsl:stylesheet>
