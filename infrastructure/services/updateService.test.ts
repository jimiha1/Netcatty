import { strict as assert } from "node:assert";
import { test } from "node:test";

import { buildUpdateFeedUrls } from "./updateService";

test("buildUpdateFeedUrls targets the producing fork", () => {
  const urls = buildUpdateFeedUrls("example-org", "Netcatty");
  assert.equal(
    urls.api,
    "https://api.github.com/repos/example-org/Netcatty/releases/latest"
  );
  assert.equal(urls.releasesPage, "https://github.com/example-org/Netcatty/releases");
});

test("buildUpdateFeedUrls keeps upstream shape for default owner", () => {
  const urls = buildUpdateFeedUrls("binaricat", "Netcatty");
  assert.equal(
    urls.api,
    "https://api.github.com/repos/binaricat/Netcatty/releases/latest"
  );
  assert.equal(urls.releasesPage, "https://github.com/binaricat/Netcatty/releases");
});
