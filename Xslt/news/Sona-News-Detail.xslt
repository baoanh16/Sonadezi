<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:msxsl="urn:schemas-microsoft-com:xslt"
 exclude-result-prefixes="msxsl">
	<xsl:output method="html" indent="yes" />
	<xsl:template match="/">
		<section class="news-page">
			<div class="container">
				<div class="row">
					<div class="col-lg-9 content">
						<div class="textbox">
							<h1>
								<xsl:value-of select="/NewsDetail/Title" disable-output-escaping="yes"></xsl:value-of>
								<xsl:value-of select="/NewsDetail/EditLink" disable-output-escaping="yes"></xsl:value-of>
							</h1>
							<xsl:value-of select="/NewsDetail/BriefContent" disable-output-escaping="yes"></xsl:value-of>
							<xsl:value-of select="/NewsDetail/FullContent" disable-output-escaping="yes"></xsl:value-of>
						</div>
						<div class="news-related">
							<xsl:if test="count(/NewsDetail/NewsRelated)>0">
								<h3>Tin liên quan</h3>
								<div class="row item-related-wrapper">
									<xsl:apply-templates select="/NewsDetail/NewsRelated"></xsl:apply-templates>
								</div>
							</xsl:if>
						</div>
					</div>
					<div class="col-lg-3 other-news">
						<xsl:if test="count(/NewsDetail/NewsOther)>0">
							<div class="other-news-title">
								<h3>Tin nội bộ</h3>
							</div>
							<div class="list">
								<xsl:apply-templates select="/NewsDetail/NewsOther"></xsl:apply-templates>
							</div>
						</xsl:if>
					</div>
				</div>
			</div>
		</section>
	</xsl:template>
	<xsl:template match="NewsOther">
		<a class="item" rel="nofollow" target="_self">
			<xsl:attribute name="href">
				<xsl:value-of select="Url"></xsl:value-of>
			</xsl:attribute>
			<figure>
				<div class="imgbox">
					<img>
					<xsl:attribute name="src">
						<xsl:value-of select="ImageUrl"></xsl:value-of>
					</xsl:attribute>
					<xsl:attribute name="alt">
						<xsl:value-of select="Title"></xsl:value-of>
					</xsl:attribute>
					</img>
				</div>
				<figcaption>
					<h5>
						<xsl:value-of select="Title" disable-output-escaping="yes"></xsl:value-of>
					</h5>
				</figcaption>
			</figure>
		</a>
	</xsl:template>
	<xsl:template match="NewsRelated">
		<div class="col-6 col-md-4">
			<a class="item" rel="nofollow" target="_self">
				<xsl:attribute name="href">
					<xsl:value-of select="Url"></xsl:value-of>
				</xsl:attribute>
				<figure>
					<div class="imgbox">
						<img>
						<xsl:attribute name="src">
							<xsl:value-of select="ImageUrl"></xsl:value-of>
						</xsl:attribute>
						<xsl:attribute name="alt">
							<xsl:value-of select="Title"></xsl:value-of>
						</xsl:attribute>
						</img>
					</div>
					<figcaption>
						<h4>
							<xsl:value-of select="Title" disable-output-escaping="yes"></xsl:value-of>
						</h4>
					</figcaption>
				</figure>
			</a>
		</div>
	</xsl:template>
</xsl:stylesheet>
