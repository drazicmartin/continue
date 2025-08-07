# Dev UI

```bash
cd ui
npm run dev
```

# Build project

```bash
# VScode
cd extensions/vscode
npm run package-all

# -> download the folder extensions/vscode/build

# Intellij
sdk install java 17.0.14-jbr
sdk use java 17.0.14-jbr
cd extensions/intellij
./gradlew buildPlugin

# -> download the folder extensions/intellij/build/distributions
```
