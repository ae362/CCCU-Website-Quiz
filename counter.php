<?php
    $file = 'counter.txt'; // File to store the visitor count
    
    // Read the current count from the file
    $count = file_get_contents($file);
    
    // Increment the count by 1
    $count++;
    
    // Write the updated count back to the file
    file_put_contents($file, $count);
    
    // Output the count
    echo $count;
?>
