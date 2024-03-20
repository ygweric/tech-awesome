function getDomainFromUrl(url) {
  if (!url) {
    return ''
  }
  if (typeof url !== 'string') {
    return ''
  }
  const domainRegex = /^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:/\n]+)/i;
  const matches = url.match(domainRegex);
  if (matches && matches.length > 1) {
    return matches[1];
  } else {
    return null;
  }
}
const testCases = [
  // 基本测试用例
  { input: "https://www.example.com/path/to/page", expected: "example.com" },
  { input: "http://subdomain.example.com", expected: "subdomain.example.com" },
  { input: "https://example.com", expected: "example.com" },
  { input: "https://www.example.com", expected: "example.com" },
  { input: "http://localhost:3000", expected: "localhost" },
  // 包含用户名和密码
  { input: "https://username:password@example.com", expected: "example.com" },
  // 包含端口号
  { input: "http://example.com:8080/path/to/page", expected: "example.com" },
  // 包含路径
  { input: "http://example.com/path/to/page", expected: "example.com" },
  { input: "https://subdomain.example.com/path/to/page", expected: "subdomain.example.com" },
  // 包含特殊字符
  { input: "https://example-1.com", expected: "example-1.com" },
  { input: "https://example_2.com", expected: "example_2.com" },
  { input: "https://example.com/path/to/page?query=1", expected: "example.com" },
  // 不合法的 URL
  { input: "example.com", expected: null },
  { input: "example", expected: null },
  { input: "https://", expected: null },
  { input: "", expected: null },
  { input: null, expected: null },
  { input: undefined, expected: null },
  { input: 12345, expected: null },
];

function runTests() {
  for (const { input, expected } of testCases) {
    const result = getDomainFromUrl(input);
    if (result === expected) {
      console.log(`Test passed: getDomainFromUrl("${input}") returned "${expected}"`);
    } else {
      console.error(`Test failed: getDomainFromUrl("${input}") returned "${result}", expected "${expected}"`);
    }
  }
}

runTests();