<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:msxsl="urn:schemas-microsoft-com:xslt"
 exclude-result-prefixes="msxsl">
	<xsl:output method="html" indent="yes" />
	<xsl:template match="/">
		<div class="container">
			<div class="row">
				<div class="col-lg-9 textbox">
					<h1>
						<xsl:value-of select="/NewsDetail/Title" disable-output-escaping="yes"></xsl:value-of>
						<xsl:value-of select="/NewsDetail/EditLink" disable-output-escaping="yes"></xsl:value-of>
					</h1>
					<time>
						<xsl:value-of select="/NewsDetail/CreatedDate" disable-output-escaping="yes"></xsl:value-of>
					</time>
					<xsl:value-of select="/NewsDetail/FullContent" disable-output-escaping="yes"></xsl:value-of>
					<!-- <h4>Thông tin tuyển dụng</h4>
					<p>Vị trí tuyển dụng: Nhân viên kinh doanh</p>
					<p>Chức vụ: Nhân viên</p>
					<p>Yêu cầu giới tính: Nam</p>
					<p>Địa điểm làm việc: Thành phố Hồ Chí Minh</p>
					<p>Yêu cầu độ tuổi: Không yêu cầu</p>
					<p>Mức lương: 5-7 triệu</p>
					<p>Bằng cấp tối thiểu: Trung cấp</p>
					<p>Số lượng cần tuyển: 3</p>
					<p>Hình thức làm việc: Toàn thời gian cố định</p>
					<p>Kinh nghiệm tối thiểu: 1 năm</p>
					<h4>Mô tả công việc</h4>
					<ul>
						<li>Làm việc tại Biên Hoà</li>
						<li>Thời gian làm việc bắt đầu từ 18h</li>
						<li>Duy trì những quan hệ kinh doanh hiện có, tìm kiếm khách hàng mới, khách hàng tiềm năng;</li>
						<li>Lập kế hoạch công tác tuần, báo cáo hàng ngày cho Giám sát kinh doanh</li>
						<li>Hiểu rõ và thuộc tính năng, bao bì, giá, ưu nhược điểm của sản phẩm, sản phẩm tương tự, sản phẩm của đối thủ
							cạnh tranh.</li>
						<li>Nắm được quy trình tiếp xúc khách hàng, quy trình xử lý khiếu nại thông tin, quy trình nhận và giải quyết
							thông tin khách hàng </li>
						<li>Tiếp xúc khách hàng và ghi nhận toàn bộ các thông tin của khách hàng trong báo cáo tiếp xúc khách hàng. </li>
						<li>Báo cáo nội dung tiếp xúc khách hàng trong ngày cho Giám sát kinh doanh.</li>
						<li>Nhận và xử lý các khiếu nại của khách hàng về chất lượng sản phẩm, thời gian giao hàng…</li>
						<li>Chăm sóc khách hàng</li>
					</ul> -->
					<!-- <table>
						<tr>
							<th>Hạn nộp hồ sơ</th>
							<td>15/05/2019</td>
						</tr>
						<tr>
							<th>30/12/2018</th>
							<td>Mọi hình thức</td>
						</tr>
						<tr>
							<th>Ngày đăng tuyển</th>
							<td>Hình thức nộp hồ sơ</td>
						</tr>
					</table>
					<h4>Thông tin liên hệ</h4>
					<p>Người liên hệ: Phòng Nhân Sự</p>
					<p>Địa chỉ: Tầng 8 Tòa nhà Sonadezi, số 1, đường 1, KCN Biên Hòa, P. An Bình, Tp. Biên Hòa, Tỉnh Đồng Nai</p>
					<p>Email: sdv@sonadezi-sdv.com.vn</p>
					<p>Điện thoại: (061) 8890 888/ 777</p> -->
					<div class="apply-download">
						<a class="download">
							<xsl:attribute name="href">
								<xsl:value-of select="/NewsDetail/FileUrl" disable-output-escaping="yes"></xsl:value-of>
							</xsl:attribute>
							Tải mẫu đơn xin việc
						</a>
						<div class="apply" id="applyToggle">Ứng tuyển ngay</div>
					</div>
					<div class="apply-form" style="display: none">
						<iframe src="" frameborder="0">
							<xsl:attribute name="src">
								<xsl:value-of select="/NewsDetail/ApplyUrl" disable-output-escaping="yes"></xsl:value-of>
							</xsl:attribute>
						</iframe>
					</div>
				</div>
				<div class="col-lg-3 other-jobs">
					<xsl:if test="count(/NewsDetail/NewsOther)">
						<div class="other-job-title">
							<h3>Tin tuyển dụng khác</h3>
						</div>
						<div class="list">
							<xsl:apply-templates select="/NewsDetail/NewsOther"></xsl:apply-templates>
						</div>
					</xsl:if>
				</div>
			</div>
		</div>
	</xsl:template>
	<xsl:template match="NewsOther">
		<a class="item" rel="nofollow" target="_self">
			<xsl:attribute name="href">
				<xsl:value-of select="Url"></xsl:value-of>
			</xsl:attribute>
			<time>
				<xsl:value-of select="CreatedDate" disable-output-escaping="yes"></xsl:value-of>
			</time>
			<h5>
				<xsl:value-of select="Title" disable-output-escaping="yes"></xsl:value-of>
			</h5>
		</a>
	</xsl:template>
</xsl:stylesheet>
