<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Coming Soon</title>
  <link rel="stylesheet" href="/assets/styles/style.css">
  <script src="/assets/scripts/tailwind.js"></script>
  <script src="/assets/scripts/script.js" defer></script>
  <meta name="description" content="A coming soon page for this website">
</head>

<body class="min-w-[100vw] min-h-screen grid place-items-center 
    bg-[url('/assets/imgs/bg-mb.png')] sm:bg-[url('/assets/imgs/bg-tb.png')] 
    lg:bg-[url('/assets/imgs/bg-pc.png')] bg-no-repeat bg-cover">
  <div
    class="fixed top-[5vh] right-[10vw] bg-black/90 hover:bg-black rounded-xl py-2 px-6 font-bold z-50 cursor-pointer"
    onclick="changeLanguage()" id="language-toggle">
    Ar
  </div>
  <div class="mx-auto w-[90%] max-w-[90%] sm:max-w-[80%] md:max-w-[75%] lg:max-w-[50%]">
    <?php include 'sections/logo.php'; ?>
    <div class="hidden" id="ar-section-container">
      <?php include 'sections/arabic-content-mobile.php'; ?>
      <?php include 'sections/arabic-content-tablet.php'; ?>
    </div>
    <div class="" id="en-section-container">
      <?php include 'sections/english-content-mobile.php'; ?>
      <?php include 'sections/english-content-tablet.php'; ?>
    </div>
    <div class="flex justify-center gap-2 sm:gap-4 w-[300px] mx-auto my-3 sm:my-6 xl:my-8">
      <?php include 'sections/social-media.php'; ?>
    </div>
  </div>
</body>

</html>