// AgentAllowance — cấu hình duy nhất của frontend.
// Mọi địa chỉ / URL đều đọc từ đây. Không sửa app.js khi đổi địa chỉ.
// "TBD" = chưa deploy, app.js phải hiện thông báo rõ ràng thay vì crash.
const CONFIG = {
  chainId: 56,
  agentAllowanceAddress: "TBD",
  badgeAddress: "TBD",
  agentIdAddress: "0x60b9262456de011f7d15a54cdd8c48baaa8b022f",
  rpcUrl: "https://bsc-dataseed.binance.org/",
  verifierUrl: "TBD",
  spaceIdMetadata: "https://agentid.prd.space.id/metadata/",
  // Kỳ tính điểm 18/11/2026 08:00 UTC → 09/12/2026 08:00 UTC (epoch giây).
  periodStart: 1794988800,
  periodEnd: 1796803200,
  // Hết kỳ nộp bài: 09/12/2026 08:00 UTC.
  submissionDeadline: "2026-12-09T08:00:00Z",
};
