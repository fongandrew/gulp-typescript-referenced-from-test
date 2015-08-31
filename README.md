# gulp-typescript-referenced-from-test
Test for referencedFrom filters

Test for [gulp-typescript's](https://github.com/ivogabe/gulp-typescript) referencedFrom filters. To run, do `npm install`
and `npm test`. Currently, they don't appear to be working properly and result in the following errors:

```
gulp-typescript: Could not find file /home/vagrant/gulp-filter-test/a.ts. Make sure you don't rename a file before you pass it to ts.filter()
gulp-typescript: Could not find file /home/vagrant/gulp-filter-test/implicitReferenced.ts. Make sure you don't rename a file before you pass it to ts.filter()
gulp-typescript: Could not find file /home/vagrant/gulp-filter-test/notReferenced.ts. Make sure you don't rename a file before you pass it to ts.filter()
gulp-typescript: Could not find file /home/vagrant/gulp-filter-test/test-1.ts. Make sure you don't rename a file before you pass it to ts.filter()
gulp-typescript: Could not find file /home/vagrant/gulp-filter-test/z.ts. Make sure you don't rename a file before you pass it to ts.filter()
```
