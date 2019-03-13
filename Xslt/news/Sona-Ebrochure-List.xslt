<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:msxsl="urn:schemas-microsoft-com:xslt"
 exclude-result-prefixes="msxsl">
	<xsl:output method="html" indent="yes" />
	<xsl:template match="/">
		<h2 class="main-title">
			<xsl:value-of select="/NewsList/ZoneTitle" disable-output-escaping="yes"></xsl:value-of>
		</h2>
		<div class="table-responsive">
			<table>
				<thead>
					<tr>
						<th></th>
						<th><span><xsl:value-of select="/NewsList/DateText" disable-output-escaping="yes"></xsl:value-of></span></th>
						<th><span><xsl:value-of select="/NewsList/DownloadText" disable-output-escaping="yes"></xsl:value-of></span></th>
					</tr>
				</thead>
				<tbody>
					<xsl:apply-templates select="/NewsList/News"></xsl:apply-templates>
				</tbody>
			</table>
		</div>
	</xsl:template>
	<xsl:template match="News">
		<tr>
			<td>
				<a download="">
					<xsl:attribute name="href">
						<xsl:value-of select="FileUrl" disable-output-escaping="yes"></xsl:value-of>
					</xsl:attribute>
					<span class="fas fa-file-alt"></span>
					<span>
						<xsl:value-of select="Title" disable-output-escaping="yes"></xsl:value-of>
					</span>
				</a>
			</td>
			<td><span>
					<xsl:value-of select="CreatedDate" disable-output-escaping="yes"></xsl:value-of>
				</span></td>
			<td>
				<a download="">
					<xsl:attribute name="href">
						<xsl:value-of select="FileUrl" disable-output-escaping="yes"></xsl:value-of>
					</xsl:attribute>
					<span class="fas fa-download"></span>
				</a>
			</td>
		</tr>
	</xsl:template>
</xsl:stylesheet>
