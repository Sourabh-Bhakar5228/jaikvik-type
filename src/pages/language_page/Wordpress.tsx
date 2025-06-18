import React, { useState } from "react";

const WordPressSQL = () => {
  const [activeTab, setActiveTab] = useState("basics");
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert(
      `Thank you for subscribing with ${email}! We'll keep you updated on WordPress SQL.`
    );
    setEmail("");
  };

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen">
      {/* Hero Banner */}
      <section className="bg-gradient-to-br from-blue-900 to-gray-900 py-20 text-center">
        <div className="container mx-auto px-4 max-w-6xl">
          <h1 className="text-5xl font-bold mb-5 text-blue-400">
            WordPress SQL
          </h1>
          <p className="text-xl max-w-3xl mx-auto mb-8 text-gray-300">
            Master the SQL behind WordPress to optimize, customize, and extend
            your sites.
          </p>
          <button
            onClick={() =>
              document
                .getElementById("features")
                .scrollIntoView({ behavior: "smooth" })
            }
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300"
          >
            Explore WordPress Database
          </button>
        </div>
      </section>

      {/* Tabs Navigation */}
      <div className="container mx-auto px-4 max-w-6xl my-8">
        <div className="flex border-b border-gray-700 overflow-x-auto">
          <button
            className={`px-6 py-3 font-medium whitespace-nowrap ${
              activeTab === "basics"
                ? "text-blue-400 border-b-2 border-blue-400"
                : "text-gray-400 hover:text-gray-300"
            }`}
            onClick={() => setActiveTab("basics")}
          >
            WordPress DB Basics
          </button>
          <button
            className={`px-6 py-3 font-medium whitespace-nowrap ${
              activeTab === "structure"
                ? "text-blue-400 border-b-2 border-blue-400"
                : "text-gray-400 hover:text-gray-300"
            }`}
            onClick={() => setActiveTab("structure")}
          >
            Database Structure
          </button>
          <button
            className={`px-6 py-3 font-medium whitespace-nowrap ${
              activeTab === "queries"
                ? "text-blue-400 border-b-2 border-blue-400"
                : "text-gray-400 hover:text-gray-300"
            }`}
            onClick={() => setActiveTab("queries")}
          >
            Common Queries
          </button>
          <button
            className={`px-6 py-3 font-medium whitespace-nowrap ${
              activeTab === "optimization"
                ? "text-blue-400 border-b-2 border-blue-400"
                : "text-gray-400 hover:text-gray-300"
            }`}
            onClick={() => setActiveTab("optimization")}
          >
            Optimization
          </button>
        </div>
      </div>

      {/* Tab Content */}
      <div className="container mx-auto px-4 max-w-6xl my-12">
        {activeTab === "basics" && (
          <div id="basics">
            <h2 className="text-3xl font-bold mb-8 text-blue-400">
              WordPress Database Fundamentals
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* WordPress DB Overview */}
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-blue-300">
                  WordPress Database
                </h3>
                <p className="mb-4 text-gray-300">
                  WordPress uses MySQL/MariaDB to store all website data
                  including content, settings, users, and more.
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-300">
                  <li>Default uses MySQL 5.6 or higher</li>
                  <li>Stores data in 12+ tables by default</li>
                  <li>Uses the wpdb class for database interactions</li>
                  <li>Prefixed tables (default: wp_) for security</li>
                  <li>Supports both MyISAM and InnoDB storage engines</li>
                </ul>
                <div className="mt-4 p-3 bg-gray-700 rounded">
                  <p className="text-sm text-gray-300">
                    <strong>Location:</strong> Defined in wp-config.php
                    (DB_NAME, DB_USER, DB_PASSWORD, DB_HOST)
                  </p>
                </div>
              </div>

              {/* Why Understand WP SQL */}
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-blue-300">
                  Why Learn WordPress SQL?
                </h3>
                <p className="mb-4 text-gray-300">
                  Understanding WordPress SQL helps you:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-300">
                  <li>Troubleshoot database issues</li>
                  <li>Perform advanced customizations</li>
                  <li>Optimize website performance</li>
                  <li>Migrate or backup sites manually</li>
                  <li>Develop custom plugins/themes</li>
                  <li>Analyze site data directly</li>
                </ul>
              </div>

              {/* Basic WP SQL Commands */}
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-blue-300">
                  Essential WP SQL Commands
                </h3>
                <pre className="bg-gray-900 p-4 rounded text-sm overflow-x-auto">
                  <code className="text-green-400">
                    {`-- Check WordPress database version
SELECT option_value FROM wp_options 
WHERE option_name = 'db_version';

-- Get all admin users
SELECT user_login, user_email FROM wp_users
WHERE ID IN (
  SELECT user_id FROM wp_usermeta
  WHERE meta_key = 'wp_capabilities'
  AND meta_value LIKE '%administrator%'
);

-- Count published posts
SELECT COUNT(*) FROM wp_posts 
WHERE post_type = 'post' 
AND post_status = 'publish';

-- Change site URL (if needed)
UPDATE wp_options 
SET option_value = 'https://yournewsite.com'
WHERE option_name IN ('siteurl', 'home');`}
                  </code>
                </pre>
              </div>

              {/* wpdb Class */}
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-blue-300">
                  The wpdb Class
                </h3>
                <p className="mb-4 text-gray-300">
                  WordPress provides the wpdb class for safe database
                  interactions:
                </p>
                <pre className="bg-gray-900 p-4 rounded text-sm overflow-x-auto">
                  <code className="text-green-400">
                    {`// Basic query
global $wpdb;
$results = $wpdb->get_results("SELECT * FROM {$wpdb->posts} 
  WHERE post_status = 'publish'");

// Prepared statement
$user = $wpdb->get_row(
  $wpdb->prepare("SELECT * FROM {$wpdb->users} WHERE ID = %d", 1)
);

// Insert data
$wpdb->insert(
  $wpdb->comments,
  array(
    'comment_post_ID' => 123,
    'comment_content' => 'Hello world',
    'comment_approved' => 1
  )
);

// Update data
$wpdb->update(
  $wpdb->posts,
  array('post_title' => 'New title'),
  array('ID' => 42)
);`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        )}

        {activeTab === "structure" && (
          <div id="structure">
            <h2 className="text-3xl font-bold mb-8 text-blue-400">
              WordPress Database Structure
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Core Tables */}
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-blue-300">
                  Core WordPress Tables
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-300">
                  <li>
                    <strong>wp_options:</strong> Site settings and options
                  </li>
                  <li>
                    <strong>wp_posts:</strong> Posts, pages, and custom post
                    types
                  </li>
                  <li>
                    <strong>wp_postmeta:</strong> Additional post metadata
                  </li>
                  <li>
                    <strong>wp_users:</strong> User accounts
                  </li>
                  <li>
                    <strong>wp_usermeta:</strong> User metadata and capabilities
                  </li>
                  <li>
                    <strong>wp_comments:</strong> Post comments
                  </li>
                  <li>
                    <strong>wp_commentmeta:</strong> Comment metadata
                  </li>
                  <li>
                    <strong>wp_terms:</strong> Taxonomy terms (categories, tags)
                  </li>
                  <li>
                    <strong>wp_term_relationships:</strong> Post-term
                    relationships
                  </li>
                  <li>
                    <strong>wp_term_taxonomy:</strong> Term taxonomy definitions
                  </li>
                </ul>
              </div>

              {/* Table Relationships */}
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-blue-300">
                  Table Relationships
                </h3>
                <pre className="bg-gray-900 p-4 rounded text-sm overflow-x-auto">
                  <code className="text-green-400">
                    {`-- Posts with their meta data
SELECT p.*, pm.meta_key, pm.meta_value 
FROM wp_posts p
LEFT JOIN wp_postmeta pm ON p.ID = pm.post_id
WHERE p.post_type = 'post'
AND p.post_status = 'publish';

-- Users with their capabilities
SELECT u.*, um.meta_value AS capabilities
FROM wp_users u
LEFT JOIN wp_usermeta um ON u.ID = um.user_id
WHERE um.meta_key = 'wp_capabilities';

-- Posts with their terms (categories/tags)
SELECT p.post_title, t.name, tt.taxonomy
FROM wp_posts p
JOIN wp_term_relationships tr ON p.ID = tr.object_id
JOIN wp_term_taxonomy tt ON tr.term_taxonomy_id = tt.term_taxonomy_id
JOIN wp_terms t ON tt.term_id = t.term_id
WHERE p.post_status = 'publish';`}
                  </code>
                </pre>
              </div>

              {/* Custom Tables */}
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-blue-300">
                  Custom Tables
                </h3>
                <p className="mb-4 text-gray-300">
                  Plugins often create custom tables. Common examples:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-300">
                  <li>
                    <strong>wp_woocommerce_*:</strong> WooCommerce tables
                  </li>
                  <li>
                    <strong>wp_wpforms_*:</strong> WPForms entries
                  </li>
                  <li>
                    <strong>wp_learndash_*:</strong> LearnDash LMS tables
                  </li>
                  <li>
                    <strong>wp_aiowps_*:</strong> All In One WP Security
                  </li>
                </ul>
                <div className="mt-4">
                  <pre className="bg-gray-900 p-4 rounded text-sm overflow-x-auto">
                    <code className="text-green-400">
                      {`-- Check for custom tables
SHOW TABLES LIKE 'wp_%';

-- Create custom table (plugin example)
function create_custom_table() {
  global $wpdb;
  $table_name = $wpdb->prefix . 'custom_data';
  
  $sql = "CREATE TABLE $table_name (
    id mediumint(9) NOT NULL AUTO_INCREMENT,
    user_id bigint(20) NOT NULL,
    data_key varchar(100) NOT NULL,
    data_value longtext,
    PRIMARY KEY (id)
  ) $wpdb->get_charset_collate();";
  
  require_once(ABSPATH . 'wp-admin/includes/upgrade.php');
  dbDelta($sql);
}
register_activation_hook(__FILE__, 'create_custom_table');`}
                    </code>
                  </pre>
                </div>
              </div>

              {/* Multisite Structure */}
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-blue-300">
                  Multisite Structure
                </h3>
                <p className="mb-4 text-gray-300">
                  WordPress Multisite adds additional tables:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-300">
                  <li>
                    <strong>wp_blogs:</strong> List of all sites
                  </li>
                  <li>
                    <strong>wp_blog_versions:</strong> Site versions
                  </li>
                  <li>
                    <strong>wp_registration_log:</strong> User registrations
                  </li>
                  <li>
                    <strong>wp_signups:</strong> Pending signups
                  </li>
                  <li>
                    <strong>wp_site:</strong> Main site info
                  </li>
                  <li>
                    <strong>wp_sitemeta:</strong> Network-wide settings
                  </li>
                  <li>
                    <strong>wp_*_*:</strong> Per-site tables (e.g., wp_2_posts)
                  </li>
                </ul>
                <div className="mt-4 p-3 bg-gray-700 rounded">
                  <p className="text-sm text-gray-300">
                    <strong>Note:</strong> Multisite uses shared users table but
                    separate content tables for each site.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "queries" && (
          <div id="queries">
            <h2 className="text-3xl font-bold mb-8 text-blue-400">
              Common WordPress SQL Queries
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Content Management */}
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-blue-300">
                  Content Management
                </h3>
                <pre className="bg-gray-900 p-4 rounded text-sm overflow-x-auto">
                  <code className="text-green-400">
                    {`-- Find posts with shortcodes
SELECT * FROM wp_posts 
WHERE post_content LIKE '%[shortcode%';

-- Find posts without featured image
SELECT p.* FROM wp_posts p
LEFT JOIN wp_postmeta pm ON p.ID = pm.post_id AND pm.meta_key = '_thumbnail_id'
WHERE p.post_type = 'post' 
AND p.post_status = 'publish'
AND pm.meta_id IS NULL;

-- Update post URLs after domain change
UPDATE wp_posts 
SET post_content = REPLACE(post_content, 'olddomain.com', 'newdomain.com');

-- Find all post revisions
SELECT * FROM wp_posts 
WHERE post_type = 'revision';`}
                  </code>
                </pre>
              </div>

              {/* User Management */}
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-blue-300">
                  User Management
                </h3>
                <pre className="bg-gray-900 p-4 rounded text-sm overflow-x-auto">
                  <code className="text-green-400">
                    {`-- Find users who never logged in
SELECT u.* FROM wp_users u
LEFT JOIN wp_usermeta um ON u.ID = um.user_id AND um.meta_key = 'last_login'
WHERE um.meta_id IS NULL;

-- Count users by role
SELECT 
  COUNT(DISTINCT user_id) AS count,
  SUBSTRING(meta_value, 13, LOCATE('"', meta_value, 13) - 13) AS role
FROM wp_usermeta
WHERE meta_key = 'wp_capabilities'
GROUP BY role;

-- Find users registered in last 30 days
SELECT * FROM wp_users
WHERE user_registered >= DATE_SUB(NOW(), INTERVAL 30 DAY);

-- Reset user password (admin)
UPDATE wp_users 
SET user_pass = MD5('newpassword') 
WHERE ID = 1;`}
                  </code>
                </pre>
              </div>

              {/* Plugin/Theme Data */}
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-blue-300">
                  Plugin & Theme Data
                </h3>
                <pre className="bg-gray-900 p-4 rounded text-sm overflow-x-auto">
                  <code className="text-green-400">
                    {`-- Find all plugin options
SELECT * FROM wp_options 
WHERE option_name LIKE '%plugin_%';

-- Clean up orphaned plugin data
DELETE FROM wp_postmeta 
WHERE meta_key LIKE '%pluginprefix_%'
AND post_id NOT IN (SELECT ID FROM wp_posts);

-- Get active plugins
SELECT option_value FROM wp_options 
WHERE option_name = 'active_plugins';

-- Find theme mods
SELECT * FROM wp_options 
WHERE option_name LIKE 'theme_mods_%';`}
                  </code>
                </pre>
              </div>

              {/* WooCommerce */}
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-blue-300">
                  WooCommerce Queries
                </h3>
                <pre className="bg-gray-900 p-4 rounded text-sm overflow-x-auto">
                  <code className="text-green-400">
                    {`-- Get recent orders
SELECT p.ID, p.post_date, pm.meta_value AS total
FROM wp_posts p
LEFT JOIN wp_postmeta pm ON p.ID = pm.post_id AND pm.meta_key = '_order_total'
WHERE p.post_type = 'shop_order'
ORDER BY p.post_date DESC
LIMIT 10;

-- Find products with low stock
SELECT p.ID, p.post_title, pm.meta_value AS stock
FROM wp_posts p
LEFT JOIN wp_postmeta pm ON p.ID = pm.post_id AND pm.meta_key = '_stock'
WHERE p.post_type = 'product'
AND CAST(pm.meta_value AS SIGNED) < 5;

-- Calculate monthly sales
SELECT 
  DATE_FORMAT(p.post_date, '%Y-%m') AS month,
  COUNT(*) AS order_count,
  SUM(CAST(pm.meta_value AS DECIMAL(10,2))) AS revenue
FROM wp_posts p
LEFT JOIN wp_postmeta pm ON p.ID = pm.post_id AND pm.meta_key = '_order_total'
WHERE p.post_type = 'shop_order'
AND p.post_status = 'wc-completed'
GROUP BY month
ORDER BY month;`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        )}

        {activeTab === "optimization" && (
          <div id="optimization">
            <h2 className="text-3xl font-bold mb-8 text-blue-400">
              WordPress Database Optimization
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Optimization Techniques */}
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-blue-300">
                  Optimization Techniques
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-300">
                  <li>
                    <strong>Clean post revisions:</strong> Old versions of posts
                  </li>
                  <li>
                    <strong>Remove spam comments:</strong> Reduce comment table
                    size
                  </li>
                  <li>
                    <strong>Optimize transients:</strong> Clean expired cached
                    data
                  </li>
                  <li>
                    <strong>Index optimization:</strong> Add indexes to
                    frequently queried columns
                  </li>
                  <li>
                    <strong>Table repair:</strong> Fix corrupted tables
                  </li>
                </ul>
                <div className="mt-4">
                  <pre className="bg-gray-900 p-4 rounded text-sm overflow-x-auto">
                    <code className="text-green-400">
                      {`-- Delete post revisions
DELETE FROM wp_posts WHERE post_type = 'revision';

-- Delete spam comments
DELETE FROM wp_comments WHERE comment_approved = 'spam';

-- Clean expired transients
DELETE FROM wp_options 
WHERE option_name LIKE '_transient_%' 
OR option_name LIKE '_site_transient_%';

-- Add index to improve performance
ALTER TABLE wp_postmeta ADD INDEX post_id_index (post_id);
ALTER TABLE wp_options ADD INDEX autoload_index (autoload);

-- Optimize all tables
USE wordpress;
SHOW TABLES;
OPTIMIZE TABLE wp_posts, wp_postmeta, wp_options;`}
                    </code>
                  </pre>
                </div>
              </div>

              {/* Performance Metrics */}
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-blue-300">
                  Performance Metrics
                </h3>
                <pre className="bg-gray-900 p-4 rounded text-sm overflow-x-auto">
                  <code className="text-green-400">
                    {`-- Check table sizes
SELECT 
  table_name AS 'Table',
  ROUND((data_length + index_length) / 1024 / 1024, 2) AS 'Size (MB)'
FROM information_schema.TABLES
WHERE table_schema = DATABASE()
ORDER BY (data_length + index_length) DESC;

-- Find slow queries (enable slow query log first)
# In my.cnf:
# slow_query_log = 1
# slow_query_log_file = /var/log/mysql/mysql-slow.log
# long_query_time = 2

-- Check query cache status
SHOW STATUS LIKE 'Qcache%';

-- Analyze query performance
EXPLAIN SELECT * FROM wp_posts 
WHERE post_type = 'post' AND post_status = 'publish';`}
                  </code>
                </pre>
              </div>

              {/* Backup/Restore */}
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-blue-300">
                  Backup & Restore
                </h3>
                <p className="mb-4 text-gray-300">
                  Essential database backup commands:
                </p>
                <pre className="bg-gray-900 p-4 rounded text-sm overflow-x-auto">
                  <code className="text-green-400">
                    {`# Export database (command line)
mysqldump -u username -p wordpress > wordpress_backup.sql

# Export specific tables
mysqldump -u username -p wordpress wp_posts wp_postmeta > posts_backup.sql

# Import database
mysql -u username -p wordpress < wordpress_backup.sql

# WP-CLI backup commands
wp db export
wp db import backup.sql
wp db optimize
wp db repair`}
                  </code>
                </pre>
                <div className="mt-4 p-3 bg-gray-700 rounded">
                  <p className="text-sm text-gray-300">
                    <strong>Important:</strong> Always backup before making
                    direct database changes.
                  </p>
                </div>
              </div>

              {/* Security */}
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-blue-300">
                  Security Best Practices
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-300">
                  <li>Use unique table prefixes (not wp_)</li>
                  <li>Regularly change database user passwords</li>
                  <li>Limit database user privileges</li>
                  <li>Regularly update WordPress and plugins</li>
                  <li>Monitor for SQL injection attempts</li>
                </ul>
                <div className="mt-4">
                  <pre className="bg-gray-900 p-4 rounded text-sm overflow-x-auto">
                    <code className="text-green-400">
                      {`-- Change table prefix (example)
RENAME TABLE wp_posts TO newprefix_posts;
RENAME TABLE wp_postmeta TO newprefix_postmeta;

-- Create limited database user
CREATE USER 'wpuser'@'localhost' IDENTIFIED BY 'strongpassword';
GRANT SELECT, INSERT, UPDATE, DELETE ON wordpress.* TO 'wpuser'@'localhost';

-- Check for suspicious strings in content
SELECT * FROM wp_posts 
WHERE post_content LIKE '%<script%'
OR post_content LIKE '%eval(%'
OR post_content LIKE '%base64_decode%';`}
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Newsletter */}
      <section className="bg-gray-800 py-16 my-8">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-5 text-blue-400">
            WordPress Database Tips
          </h2>
          <p className="mb-8 text-gray-300">
            Subscribe for WordPress SQL optimization techniques, security best
            practices, and performance tips.
          </p>
          <form
            onSubmit={handleSubscribe}
            className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-4 py-3 rounded-full focus:outline-none text-gray-900"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default WordPressSQL;
