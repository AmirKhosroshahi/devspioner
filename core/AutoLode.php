<?php
spl_autoload_register(function ($class) {
    // Define the base directory for the namespace prefix
    $baseDir = __DIR__ . '/core/';

    // Remove the namespace prefix and replace backslashes with directory separators
    $relativeClass = str_replace('core\\', '', $class);

    // Replace underscores with directory separators
    $fileName = $baseDir . str_replace('_', '/', $relativeClass) . '.php';

    // If the file exists, require it
    if (file_exists($fileName)) {
        require_once $fileName;
    }
});


