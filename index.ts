import { RecipeBuilder } from "@blitzjs/installer"
import { join } from "path"

export default RecipeBuilder()
    .setName("Semantic Release for GitHub")
    .setDescription("This will install all necessary dependencies and configure @semantic-release/github for use.")
    .setOwner("Stefan Kühnel <git@stefankuehnel.com>")
    .setRepoLink("https://github.com/custom-recipes/semantic-release-github")
    .addAddDependenciesStep({
        stepId: "addDeps",
        stepName: "Add npm dependencies",
        explanation: "We'll install Semantic Release itself.",
        packages: [
            {
                name: "semantic-release",
                version: "latest",
                isDevDep: true
            }
        ]
    })
    .addNewFilesStep({
        stepId: "addConfig",
        stepName: "Add configuration files",
        explanation: "Next, we need to add some configuration files!",
        targetDirectory: ".",
        // The 'template' directory replicates the root directory.
        // For example, if the '.github/workflows/ci.yml' file is to be created,
        // it must be located at 'templates/.github/workflows/ci.yml'.
        templatePath: join(__dirname, "templates"),
        templateValues: {}
    })
    .build()
