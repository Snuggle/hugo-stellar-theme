you can try this, it's easy and straightforward. This will push all commits before (and including) the hash you use as <last-commit-hash-from-old-repo> to the other repo:

```
git clone https://github.com/path/to/new-repo.git new-repo
cd new-repo
git remote add old https://github.com/path/to/old-repo.git
git remote update
git merge --allow-unrelated-histories <last-commit-hash-from-old-repo>
git push origin main
```

https://stackoverflow.com/a/70659187