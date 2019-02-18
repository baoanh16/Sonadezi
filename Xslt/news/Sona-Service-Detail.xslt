<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:msxsl="urn:schemas-microsoft-com:xslt"
 exclude-result-prefixes="msxsl">
	<xsl:output method="html" indent="yes" />
	<xsl:template match="/">
		<h2 class="main-title">
			<xsl:value-of select="/NewsDetail/Title" disable-output-escaping="yes"></xsl:value-of>
		</h2>
		<xsl:value-of select="/NewsDetail/EditLink" disable-output-escaping="yes"></xsl:value-of>
		<div class="row fullContent">
			<div class="col-sm-10 col-lg-8">
				<xsl:value-of select="/NewsDetail/FullContent" disable-output-escaping="yes"></xsl:value-of>
			</div>
		</div>
		<div class="row no-gutters">
			<xsl:apply-templates select="/NewsDetail/NewsAttributes"></xsl:apply-templates>
		</div>
		<div class="row briefContent">
			<div class="col-sm-10 col-lg-8">
				<h5>Tải tài liệu:</h5>
				<xsl:value-of select="/NewsDetail/BriefContent" disable-output-escaping="yes"></xsl:value-of>
			</div>
		</div>
	</xsl:template>
	<xsl:template match="NewsAttributes">
		<xsl:if test="position() mod 2 = 1">
			<xsl:text disable-output-escaping="yes">&lt;div class="col-12 Attributes"&gt;</xsl:text>
		</xsl:if>
		<div class="item">
			<div class="textbox">
				<h5>
					<xsl:value-of select="Title" disable-output-escaping="yes"></xsl:value-of>
				</h5>
				<xsl:value-of select="Content" disable-output-escaping="yes"></xsl:value-of>
			</div>
		</div>
		<xsl:if test="position() mod 2 = 0 or position()=last()">
			<xsl:text disable-output-escaping="yes">&lt;/div&gt;</xsl:text>
		</xsl:if>
	</xsl:template>
</xsl:stylesheet>
