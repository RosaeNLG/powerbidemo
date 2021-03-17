<!--
Copyright 2021 Ludan Stoecklé
SPDX-License-Identifier: CC-BY-4.0
-->
# Contributing to RosaeNLG Power BI plugin

## Welcomed Contributions

Contributions of any kind are welcomed: code, ideas, etc.

## Contribution Process

Ideation:

- create [an issue on GitHub](https://github.com/RosaeNLG/powerbidemo/issues): bug, idea, etc.
- exchange: what should be done, best approach etc.

Development:

- create a feature branch; name it after the topic: *my-feature* or *issue-#123*
- develop
- write tests
- lint your code following current configuration
- if the code corrects vulnerabilities: CVE IDs must be indicated in the commit message and in the `CHANGELOG.md`
- each commit **MUST** contain a sign off message (see below)
- new code must be under Apache-2.0 license, new documentation under Creative Commons Attribution 4.0 International
- update `CHANGELOG.md` (leave `== [Unreleased]`)
- push your branch and create a PR
- once accepted, code gets merged in master

Publish:
- a new version is built by the core maintainers and integrate the changes in master


## Sign off

For compliance purposes, [Developer Certificate of Origin (DCO) on Pull Requests](https://github.com/apps/dco) is activated on the repo.

In practice, you must add a `Signed-off-by:` message at the end of every commit:
```
This is my commit message

Signed-off-by: Random J Developer <random@developer.example.org>
```

Add `-s` flag to add it automatically: `git commit -s -m 'This is my commit message'`.


## License

The Power BI RosaeNLG plugin project uses the Apache-2.0 license. It is based on the CircleCard sample code, which is licensed under the MIT license. A copy of each license can be found in the LICENSE file. **New code must be release under Apache 2.0.**

Documentation is under [Creative Commons Attribution 4.0 International](https://spdx.org/licenses/CC-BY-4.0.html).


### For code files

Each file of code **must** contain, in a comment at the top:

- an SPDX short-form identifier
- the copyright (new or updated)

For a new file of code, which will be under Apache-2.0 license:
```
/**
 * @license
 * Copyright 2020, Random J Developer at Random Corp.
 * SPDX-License-Identifier: Apache-2.0
 */

```

For an existing file, just complete the copyright (put yourself first):
```
/**
 * @license
 * Copyright 2020, Random J Developer at Random Corp., 2019 Ludan Stoecklé, 2018 Other Contributor, etc.
 * SPDX-License-Identifier: ~~~ LEAVE WHATEVER IS ALREADY PRESENT ~~~
 */

```

Note that TypeScript code, in addition to an @license tag, **requires an empty line after the initial file comment**.
```TypeScript
/**
 * @license
 * Copyright ...
 * SPDX-License-Identifier: ...
 */

// Note the empty line above.
class X { }
```

### For documentation files

Markdown `.md` files:
```
<!--
Copyright 2021 ...
SPDX-License-Identifier: CC-BY-4.0
-->
```
