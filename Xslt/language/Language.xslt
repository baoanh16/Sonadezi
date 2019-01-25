<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:msxsl="urn:schemas-microsoft-com:xslt"
 exclude-result-prefixes="msxsl">
	<xsl:output method="html" indent="yes" />

	<xsl:template match="/">
		<div class="current">
			<xsl:apply-templates select="/LanguageList/Language" mode="Lang1"></xsl:apply-templates>
			<span class="lnr lnr-chevron-down"></span>
		</div>
		<div class="dropdown">
			<xsl:apply-templates select="/LanguageList/Language" mode="Lang2"></xsl:apply-templates>
		</div>
	</xsl:template>

	<xsl:template match="Language" mode="Lang1">
		<xsl:if test="IsActive='true'">
			<span>
				<xsl:value-of select="Title" disable-output-escaping="yes"></xsl:value-of>
			</span>
		</xsl:if>
	</xsl:template>

	<xsl:template match="Language" mode="Lang2">
		<a>
			<xsl:attribute name="href">
				<xsl:value-of select="Url"></xsl:value-of>
			</xsl:attribute>
			<xsl:value-of select="Title" disable-output-escaping="yes"></xsl:value-of>
		</a>
	</xsl:template>
</xsl:stylesheet>
