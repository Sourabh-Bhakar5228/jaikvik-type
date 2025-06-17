import { useEffect, useRef, useState } from "react";

const MobileAppShowcaseSection = () => {
  const [currentFeatureIndex, setCurrentFeatureIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollRefReverse = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();
  const animationRefReverse = useRef<number>();
  const [isMobile, setIsMobile] = useState(false);

  // Mobile App Features
  const appFeatures = [
    {
      id: 1,
      title: "Intuitive Dashboard",
      description:
        "Get real-time business insights with customizable widgets that display exactly what matters to you. Monitor KPIs, track progress, and make data-driven decisions effortlessly.",
      icon: "📊",
      gradient: "from-blue-500 to-purple-600",
    },
    {
      id: 2,
      title: "Seamless Navigation",
      description:
        "Our gesture-based interface with smooth transitions makes navigation intuitive and enjoyable. Access any feature within two taps, with thoughtful animations that guide your journey.",
      icon: "🧭",
      gradient: "from-emerald-500 to-cyan-600",
    },
    {
      id: 3,
      title: "Advanced Security",
      description:
        "Protect your sensitive data with military-grade 256-bit encryption, biometric authentication, and secure cloud backups. We prioritize your privacy with zero-knowledge architecture.",
      icon: "🔐",
      gradient: "from-rose-500 to-red-600",
    },
  ];

  // App Screen Images
  const appScreens = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=800&fit=crop",
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=800&fit=crop",
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=800&fit=crop",
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=400&h=800&fit=crop",
    },
  ];

  // Check for mobile view
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-scroll with speed control (normal direction)
  useEffect(() => {
    let scrollPosition = 0;
    const speed = isHovering ? 3 : 1;

    const scrollImages = () => {
      if (!scrollRef.current) return;

      scrollPosition += speed;
      const maxScroll =
        appScreens.length * (isMobile ? 300 : 400) - (isMobile ? 300 : 400);

      if (scrollPosition >= maxScroll) {
        scrollPosition = 0;
      }

      scrollRef.current.style.transform = `translateY(-${scrollPosition}px)`;
      animationRef.current = requestAnimationFrame(scrollImages);
    };

    animationRef.current = requestAnimationFrame(scrollImages);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [isHovering, appScreens.length, isMobile]);

  // Auto-scroll with speed control (reverse direction) - only on desktop
  useEffect(() => {
    if (isMobile) return;

    let scrollPosition = 0;
    const speed = isHovering ? 3 : 1;

    const scrollImagesReverse = () => {
      if (!scrollRefReverse.current) return;

      scrollPosition -= speed;
      const maxScroll = appScreens.length * 400 - 400;

      if (Math.abs(scrollPosition) >= maxScroll) {
        scrollPosition = 0;
      }

      scrollRefReverse.current.style.transform = `translateY(${Math.abs(
        scrollPosition
      )}px)`;
      animationRefReverse.current = requestAnimationFrame(scrollImagesReverse);
    };

    animationRefReverse.current = requestAnimationFrame(scrollImagesReverse);
    return () => {
      if (animationRefReverse.current)
        cancelAnimationFrame(animationRefReverse.current);
    };
  }, [isHovering, appScreens.length, isMobile]);

  // Feature rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeatureIndex((prev) => (prev + 1) % appFeatures.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [appFeatures.length]);

  const currentFeature = appFeatures[currentFeatureIndex];

  return (
    <section className="relative bg-black overflow-hidden py-12 lg:py-0 lg:h-[75vh]">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex flex-col lg:flex-row items-center justify-center">
          {/* Feature Content - Full width on mobile, half on desktop */}
          <div className="w-full lg:w-1/2 lg:pr-12 z-10 order-2 lg:order-1 mt-8 lg:mt-0">
            <div className="relative h-full flex flex-col justify-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 text-center lg:text-left">
                Powerful Features, <br />
                <span
                  className={`bg-gradient-to-r ${currentFeature.gradient} bg-clip-text text-transparent`}
                >
                  Beautiful Design
                </span>
              </h2>

              <p className="text-gray-300 mb-8 text-base sm:text-lg text-center lg:text-left max-w-lg mx-auto lg:mx-0">
                Our mobile app combines cutting-edge technology with elegant
                design to deliver an unparalleled user experience. Available on
                iOS and Android.
              </p>

              <div className="mb-8">
                <div className="inline-flex items-center bg-gray-800 rounded-full px-4 py-2 mb-4 mx-auto lg:mx-0">
                  <div
                    className={`w-2 h-2 rounded-full bg-gradient-to-r ${currentFeature.gradient} mr-2`}
                  />
                  <span className="text-sm font-medium text-gray-200">
                    Featured
                  </span>
                </div>

                <div className="overflow-hidden">
                  {appFeatures.map((feature, index) => (
                    <div
                      key={feature.id}
                      className={`transition-all duration-500 ease-in-out ${
                        index === currentFeatureIndex
                          ? "opacity-100 translate-y-0"
                          : "absolute opacity-0 -translate-y-4"
                      }`}
                    >
                      <div className="flex items-center mb-4">
                        <div
                          className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center text-2xl mr-4`}
                        >
                          {feature.icon}
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold text-white">
                          {feature.title}
                        </h3>
                      </div>
                      <p className="text-gray-300 mb-6 text-base sm:text-lg">
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-center lg:justify-start space-x-2 mb-8">
                {appFeatures.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentFeatureIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentFeatureIndex
                        ? `bg-gradient-to-r ${currentFeature.gradient} scale-125`
                        : "bg-gray-600"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Phone Mockups - Full width on mobile, half on desktop */}
          <div
            className={`w-full lg:w-1/2 z-10 order-1 lg:order-2 ${
              isMobile ? "mb-8" : "pl-12"
            }`}
          >
            <div
              className={`flex ${
                isMobile ? "justify-center" : "justify-start gap-8"
              }`}
            >
              {/* First Phone (normal scroll) - Always visible */}
              <div
                className={`relative ${
                  isMobile ? "w-64 h-[400px]" : "w-80 h-[500px]"
                }`}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900 rounded-[2rem] lg:rounded-[3rem] p-2 lg:p-3 shadow-2xl`}
                >
                  <div className="relative w-full h-full bg-black rounded-[1.5rem] lg:rounded-[2.5rem] overflow-hidden">
                    {/* Scrolling Images */}
                    <div
                      ref={scrollRef}
                      className="absolute inset-0 transition-transform duration-1000 ease-out"
                    >
                      {[...appScreens, ...appScreens].map((screen, i) => (
                        <div
                          key={`${screen.id}-${i}`}
                          className="absolute w-full h-full transition-opacity duration-500"
                          style={{
                            top: `${i * 100}%`,
                            opacity: i === 0 ? 1 : 0.8,
                          }}
                        >
                          <img
                            src={screen.url}
                            alt="App screen"
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Second Phone (reverse scroll) - Only visible on desktop */}
              {!isMobile && (
                <div
                  className="relative w-80 h-[500px]"
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900 rounded-[3rem] p-3 shadow-2xl">
                    <div className="relative w-full h-full bg-black rounded-[2.5rem] overflow-hidden">
                      {/* Scrolling Images (reverse) */}
                      <div
                        ref={scrollRefReverse}
                        className="absolute inset-0 transition-transform duration-1000 ease-out"
                      >
                        {[...appScreens, ...appScreens].map((screen, i) => (
                          <div
                            key={`reverse-${screen.id}-${i}`}
                            className="absolute w-full h-full transition-opacity duration-500"
                            style={{
                              bottom: `${i * 100}%`,
                              opacity: i === 0 ? 1 : 0.8,
                            }}
                          >
                            <img
                              src={screen.url}
                              alt="App screen"
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={`absolute top-1/4 -left-20 w-64 h-64 bg-gradient-to-r ${currentFeature.gradient} opacity-10 rounded-full blur-xl transition-all duration-1000`}
        />
        <div
          className={`absolute bottom-1/4 -right-20 w-64 h-64 bg-gradient-to-r ${currentFeature.gradient} opacity-10 rounded-full blur-xl transition-all duration-1000`}
        />

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[size:50px_50px] bg-[linear-gradient(to_right,gray_1px,transparent_1px),linear-gradient(to_bottom,gray_1px,transparent_1px)]" />
        </div>
      </div>
    </section>
  );
};

export default MobileAppShowcaseSection;
