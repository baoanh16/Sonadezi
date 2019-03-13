<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:msxsl="urn:schemas-microsoft-com:xslt"
 exclude-result-prefixes="msxsl">
	<xsl:output method="html" indent="yes" />
	<xsl:template match="/">
		<div class="container">
			<h2 class="main-title">
				<xsl:value-of select="/NewsList/ModuleTitle" disable-output-escaping="yes"></xsl:value-of>
			</h2>
			<div class="job-table">
				<table>
					<thead class="thead">
						<tr>
							<th><xsl:value-of select="/NewsList/NomineeText" disable-output-escaping="yes"></xsl:value-of></th>
							<th><xsl:value-of select="/NewsList/NumberApplicationText" disable-output-escaping="yes"></xsl:value-of></th>
							<th><xsl:value-of select="/NewsList/LocationText" disable-output-escaping="yes"></xsl:value-of></th>
							<th><xsl:value-of select="/NewsList/DeadlineText" disable-output-escaping="yes"></xsl:value-of></th>
						</tr>
					</thead>
					<tbody class="tbody">
						<xsl:apply-templates select="/NewsList/News"></xsl:apply-templates>
					</tbody>
				</table>
			</div>
		</div>
	</xsl:template>
	<xsl:template match="News">
		<tr>
			<td>
				<a rel="nofollow" target="_self">
					<xsl:attribute name="href">
						<xsl:value-of select="Url"></xsl:value-of>
					</xsl:attribute>
					<xsl:value-of select="Title" disable-output-escaping="yes"></xsl:value-of>
				</a>
				<xsl:value-of select="EditLink" disable-output-escaping="yes"></xsl:value-of>
			</td>
			<td>
				<xsl:value-of select="SubTitle" disable-output-escaping="yes"></xsl:value-of>
			</td>
			<td>
				<xsl:value-of select="BriefContent" disable-output-escaping="yes"></xsl:value-of>
			</td>
			<td>
				<xsl:value-of select="EndDate" disable-output-escaping="yes"></xsl:value-of>
			</td>
		</tr>
	</xsl:template>
</xsl:stylesheet>
