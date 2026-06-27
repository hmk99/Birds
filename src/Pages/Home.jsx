import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Avatar,
  Chip,
  Fade,
  Slide,
  IconButton,
  useTheme,
  useMediaQuery,
  Paper,
  Zoom,
  Grow,
  Divider,
  Stack,
} from "@mui/material";
import {
  Twitter,
  Facebook,
  Instagram,
  ArrowForward,
  Favorite,
  Groups,
  Camera,
  Nature,
  FlightTakeoff,
  Park,
  Public,
  Star,
  EmojiEvents,
  VolunteerActivism,
  School,
  Explore,
  AutoAwesome,
  Pets,
} from "@mui/icons-material";

function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const featuredBirds = [
    {
      name: "النسر الذهبي",
      scientific: "Aquila chrysaetos",
      image:
        "https://img.freepik.com/premium-photo/golden-eagle-4k_862994-11668.jpg",
      category: "جوارح",
      description: "صياد majesty في السماء",
    },
    {
      name: "الببغاء القرمزي",
      scientific: "Ara macao",
      image: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=800",
      category: "ببغاوات",
      description: "ألوان زاهية من الغابة المطيرة",
    },
    {
      name: "البومة الثلجية",
      scientific: "Bubo scandiacus",
      image:
        "https://images.stockcake.com/public/f/5/4/f54f856a-87b3-4fd5-8102-2f886d42e886_large/serene-snowy-owl-stockcake.jpg",
      category: "بوم",
      description: "صياد صامت من الشمال",
    },
    {
      name: "الطنان",
      scientific: "Trochilidae",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/0/08/Chalybura_urochrysia_%28male%29_taxobox.jpg",
      category: "طيور مغردة",
      description: "مروحية الطبيعة الصغيرة",
    },
    {
      name: "الدجاج",
      scientific: "Gallus gallus",
      image:
        "https://img.freepik.com/free-photo/photorealistic-view-rooster-with-beak-feathers_23-2151569765.jpg?semt=ais_hybrid&w=740&q=80",
      category: "دجاج",
      description: "مروحية الطبيعة الصغيرة",
    },
    {
      name: "الحمام",
      scientific: "Pigeons",
      image:
        "https://www.zoo-servion.ch/templates/yootheme/cache/6a/pigeon_biset-6aa97a0e.jpeg",
      category: "طيور مغردة",
      description: "مروحية الطبيعة الصغيرة",
    },
  ];

  const features = [
    {
      icon: <Groups sx={{ fontSize: 40 }} />,
      title: "المجتمع",
      description: "انضم إلى آلاف عشاق الطيور الشغوفين من جميع أنحاء العالم",
    },
    {
      icon: <Camera sx={{ fontSize: 40 }} />,
      title: "التصوير الفوتوغرافي",
      description:
        "شارك أفضل لقطات الطيور الخاصة بك وتعلم من المصورين المحترفين",
    },
    {
      icon: <Nature sx={{ fontSize: 40 }} />,
      title: "الحفاظ على البيئة",
      description: "حماية الأنواع المهددة بالانقراض وموائلها الطبيعية",
    },
    {
      icon: <Park sx={{ fontSize: 40 }} />,
      title: "الرحلات الميدانية",
      description: "بعثات موجهة إلى أفضل أماكن مراقبة الطيور",
    },
    {
      icon: <FlightTakeoff sx={{ fontSize: 40 }} />,
      title: "التعليم",
      description: "تعلم عن سلوك الطيور وأنماط الهجرة والتحديد",
    },
    {
      icon: <Public sx={{ fontSize: 40 }} />,
      title: "الشبكة العالمية",
      description: "تواصل مع عشاق الطيور عبر القارات والثقافات",
    },
  ];

  return (
    <Box sx={{ marginTop: "10vh", overflowX: "hidden", direction: "rtl" }}>
      {/* Hero Section */}
      <Box
        sx={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          background:
            "linear-gradient(135deg, #0d3d1a 0%, #1a5f2a 30%, #2d8f4e 70%, #4caf50 100%)",
          overflow: "hidden",
        }}
      >
        {/* Animated Background Elements */}
        <Box
          sx={{
            position: "absolute",
            width: "800px",
            height: "800px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(255,215,0,0.1) 0%, transparent 70%)",
            top: -300,
            right: -300,
            animation: "float 25s ease-in-out infinite",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)",
            bottom: -150,
            left: -150,
            animation: "float 18s ease-in-out infinite reverse",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(76,175,80,0.15) 0%, transparent 70%)",
            top: "50%",
            left: "50%",
            animation: "pulse 4s ease-in-out infinite",
          }}
        />
        <style>
          {`
            @keyframes float {
              0%, 100% { transform: translate(0, 0) rotate(0deg); }
              33% { transform: translate(40px, -40px) rotate(120deg); }
              66% { transform: translate(-30px, 30px) rotate(240deg); }
            }
            @keyframes fly {
              0%, 100% { transform: translateY(0) translateX(0) rotate(0deg); }
              25% { transform: translateY(-25px) translateX(15px) rotate(2deg); }
              50% { transform: translateY(-15px) translateX(25px) rotate(-1deg); }
              75% { transform: translateY(-35px) translateX(8px) rotate(1deg); }
            }
            @keyframes pulse {
              0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.5; }
              50% { transform: translate(-50%, -50%) scale(1.2); opacity: 0.8; }
            }
            @keyframes shimmer {
              0% { background-position: -200% center; }
              100% { background-position: 200% center; }
            }
          `}
        </style>

        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Fade in={loaded} timeout={1000}>
                <Box>
                  <Chip
                    label="🦅 أهلاً بك في عش الطيور"
                    sx={{
                      mb: 3,
                      backgroundColor: "rgba(255,215,0,0.25)",
                      color: "#ffd700",
                      fontWeight: 700,
                      fontSize: "1rem",
                      backdropFilter: "blur(10px)",
                      border: "1px solid rgba(255,215,0,0.3)",
                      px: 2,
                    }}
                  />
                  <Typography
                    variant={isMobile ? "h3" : "h2"}
                    sx={{
                      color: "white",
                      fontWeight: 900,
                      mb: 3,
                      lineHeight: 1.3,
                      fontSize: isMobile ? "2.2rem" : "4.5rem",
                      textShadow: "2px 4px 8px rgba(0,0,0,0.3)",
                    }}
                  >
                    اكتشف
                    <Box
                      component="span"
                      sx={{
                        display: "block",
                        background:
                          "linear-gradient(90deg, #ffd700, #ffed4a, #ffd700)",
                        backgroundSize: "200% auto",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        animation: "shimmer 3s linear infinite",
                      }}
                    >
                      العالم الرائع
                    </Box>
                    للطيور
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      color: "rgba(255,255,255,0.95)",
                      mb: 4,
                      fontSize: isMobile ? "1.1rem" : "1.35rem",
                      maxWidth: "550px",
                      lineHeight: 1.8,
                      fontWeight: 400,
                    }}
                  >
                    انضم إلى مجتمعنا الشغوف من عشاق الطيور والمصورين والمحافظين
                    على البيئة. استكشف وتعلم وحما أصدقاءنا ذوي الريش معاً.
                  </Typography>
                  <Stack
                    direction={{ xs: "column", sm: "row" }}
                    sx={{ display: "flex", gap: ".5rem" }}
                    spacing={2}
                  >
                    <Button
                      variant="contained"
                      size="large"
                      sx={{
                        backgroundColor:
                          "linear-gradient(135deg, #ffd700 0%, #ffed4a 100%)",
                        color: "#0d3d1a",
                        fontWeight: 800,
                        px: 5,
                        py: 2,
                        borderRadius: 4,
                        fontSize: "1.1rem",
                        boxShadow: "0 8px 25px rgba(255,215,0,0.4)",
                        "&:hover": {
                          backgroundColor: "#ffed4a",
                          transform: "translateY(-3px) scale(1.02)",
                          boxShadow: "0 12px 35px rgba(255,215,0,0.5)",
                        },
                        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                      }}
                      startIcon={<Pets />}
                    >
                      انضم إلينا
                    </Button>
                    <Button
                      variant="outlined"
                      size="large"
                      sx={{
                        borderColor: "rgba(255,255,255,0.6)",
                        color: "white",
                        fontWeight: 700,
                        px: 5,
                        py: 2,
                        borderRadius: 4,
                        fontSize: "1.1rem",
                        backdropFilter: "blur(10px)",
                        "&:hover": {
                          borderColor: "#ffd700",
                          backgroundColor: "rgba(255,215,0,0.15)",
                          transform: "translateY(-2px)",
                        },
                        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                      }}
                      startIcon={<Explore />}
                    >
                      <a href="#birds">اكتشف المزيد</a>
                    </Button>
                  </Stack>
                </Box>
              </Fade>
            </Grid>
            <Grid item xs={12} md={6}>
              <Slide in={loaded} direction="left" timeout={1200}>
                <Box
                  sx={{
                    position: "relative",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Box
                    component="img"
                    src="https://images.unsplash.com/photo-1444464666168-49d633b86797?w=800"
                    alt="طائر جميل"
                    sx={{
                      width: "100%",
                      maxWidth: "550px",
                      borderRadius: 4,
                      boxShadow: "0 40px 80px rgba(0,0,0,0.4)",
                      animation: "fly 8s ease-in-out infinite",
                      border: "4px solid rgba(255,215,0,0.3)",
                    }}
                  />
                  <Paper
                    elevation={8}
                    sx={{
                      position: "absolute",
                      bottom: -30,
                      right: isMobile ? 0 : -30,
                      backgroundColor: "white",
                      padding: 3,
                      borderRadius: 4,
                      display: "flex",
                      alignItems: "center",
                      gap: 3,
                      boxShadow: "0 20px 50px rgba(0,0,0,0.25)",
                      animation: "pulse 3s ease-in-out infinite",
                    }}
                  >
                    <Avatar
                      sx={{
                        backgroundColor:
                          "linear-gradient(135deg, #4caf50 0%, #81c784 100%)",
                        width: 60,
                        height: 60,
                      }}
                    >
                      <Favorite sx={{ fontSize: 32 }} />
                    </Avatar>
                    <Box>
                      <Typography
                        variant="h5"
                        sx={{ fontWeight: 900, color: "#0d3d1a" }}
                      >
                        10,000+
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{ color: "#666", fontWeight: 600 }}
                      >
                        عضو حول العالم
                      </Typography>
                    </Box>
                  </Paper>
                </Box>
              </Slide>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Stats Section */}
      <Box
        sx={{
          backgroundColor: "linear-gradient(180deg, #f8f9fa 0%, #e8f5e9 100%)",
          py: 10,
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} justifyContent="center">
            {[
              { number: "500+", label: "أنواع من الطيور", icon: <Pets /> },
              { number: "50+", label: "دولة حول العالم", icon: <Public /> },
              { number: "1000+", label: "مسابقة تصوير", icon: <Camera /> },
              { number: "25+", label: "سنة من النشاط", icon: <Star /> },
            ].map((stat, index) => (
              <Grid item xs={6} md={3} key={index}>
                <Zoom in={loaded} timeout={800 + index * 200}>
                  <Paper
                    elevation={3}
                    sx={{
                      p: 4,
                      textAlign: "center",
                      borderRadius: 4,
                      background: "white",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-8px)",
                        boxShadow: "0 15px 35px rgba(76,175,80,0.2)",
                      },
                    }}
                  >
                    <Box sx={{ color: "#4caf50", mb: 2, fontSize: 40 }}>
                      {stat.icon}
                    </Box>
                    <Typography
                      variant="h3"
                      sx={{
                        fontWeight: 900,
                        background:
                          "linear-gradient(135deg, #1a5f2a 0%, #4caf50 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        mb: 1,
                      }}
                    >
                      {stat.number}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ color: "#555", fontWeight: 700 }}
                    >
                      {stat.label}
                    </Typography>
                  </Paper>
                </Zoom>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Featured Birds Section */}
      <Box id="birds" sx={{ py: 14, backgroundColor: "white" }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: 10 }}>
            <Chip
              label="🦜 الطيور المميزة"
              sx={{
                mb: 3,
                backgroundColor: "#e8f5e9",
                color: "#2e7d32",
                fontWeight: 700,
                fontSize: "0.9rem",
                px: 3,
                py: 1,
              }}
            />
            <Typography
              variant={isMobile ? "h4" : "h3"}
              sx={{
                fontWeight: 900,
                color: "#0d3d1a",
                mt: 2,
                fontSize: isMobile ? "2rem" : "3rem",
              }}
            >
              تعرف على أصدقائنا ذوي الريش
            </Typography>
            <Divider
              sx={{
                width: 80,
                height: 4,
                backgroundColor: "#ffd700",
                margin: "20px auto",
                borderRadius: 2,
              }}
            />
          </Box>
          <Grid container spacing={4}>
            {featuredBirds.map((bird, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Grow in={loaded} timeout={1000 + index * 200}>
                  <Card
                    sx={{
                      height: "100%",
                      borderRadius: 4,
                      boxShadow: "0 15px 40px rgba(0,0,0,0.1)",
                      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                      overflow: "hidden",
                      "&:hover": {
                        transform: "translateY(-15px) scale(1.02)",
                        boxShadow: "0 25px 60px rgba(76,175,80,0.25)",
                      },
                    }}
                  >
                    <Box sx={{ position: "relative", overflow: "hidden" }}>
                      <CardMedia
                        component="img"
                        image={bird.image}
                        alt={bird.name}
                        sx={{
                          height: "220px",
                          width: "220px",
                          objectFit: "cover",
                          transition: "transform 0.5s ease",
                          "&:hover": {
                            transform: "scale(1.2)",
                            objectFit: "contain",
                          },
                        }}
                      />
                      <Box
                        sx={{
                          position: "absolute",
                          top: 10,
                          right: 10,
                          backgroundColor: "rgba(255,215,0,0.95)",
                          px: 2,
                          py: 0.5,
                          borderRadius: 2,
                          boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                        }}
                      >
                        <Typography
                          variant="caption"
                          sx={{ fontWeight: 800, color: "#0d3d1a" }}
                        >
                          {bird.category}
                        </Typography>
                      </Box>
                    </Box>
                    <CardContent sx={{ p: 3 }}>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 900,
                          mb: 0.5,
                          color: "#0d3d1a",
                          fontSize: "1.2rem",
                        }}
                      >
                        {bird.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#4caf50",
                          fontStyle: "italic",
                          mb: 1.5,
                          fontWeight: 600,
                        }}
                      >
                        {bird.scientific}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: "#666", lineHeight: 1.6 }}
                      >
                        {bird.description}
                      </Typography>
                    </CardContent>
                    <CardActions sx={{ p: 3, pt: 0 }}>
                      <Button
                        size="small"
                        fullWidth
                        sx={{
                          backgroundColor: "#e8f5e9",
                          color: "#2e7d32",
                          fontWeight: 700,
                          py: 1.5,
                          borderRadius: 2,
                          "&:hover": {
                            backgroundColor: "#c8e6c9",
                            transform: "scale(1.02)",
                          },
                          transition: "all 0.3s ease",
                        }}
                        endIcon={<ArrowForward />}
                      >
                        تعرف المزيد
                      </Button>
                    </CardActions>
                  </Card>
                </Grow>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Box
        sx={{
          py: 14,
          backgroundColor: "linear-gradient(180deg, #f1f8e9 0%, #f9fbe7 100%)",
          position: "relative",
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: 10 }}>
            <Chip
              label="✨ لماذا تنضم إلينا"
              sx={{
                mb: 3,
                backgroundColor: "#fff9c4",
                color: "#f57f17",
                fontWeight: 700,
                fontSize: "0.9rem",
                px: 3,
                py: 1,
              }}
            />
            <Typography
              variant={isMobile ? "h4" : "h3"}
              sx={{
                fontWeight: 900,
                color: "#0d3d1a",
                mt: 2,
                fontSize: isMobile ? "2rem" : "3rem",
              }}
            >
              مزايا العضوية
            </Typography>
            <Divider
              sx={{
                width: 80,
                height: 4,
                backgroundColor: "#ffd700",
                margin: "20px auto",
                borderRadius: 2,
              }}
            />
          </Box>
          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Zoom in={loaded} timeout={1200 + index * 150}>
                  <Paper
                    elevation={4}
                    sx={{
                      p: 4,
                      backgroundColor: "white",
                      borderRadius: 4,
                      textAlign: "center",
                      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                      height: "100%",
                      border: "2px solid transparent",
                      "&:hover": {
                        transform: "translateY(-10px) scale(1.03)",
                        boxShadow: "0 20px 50px rgba(76,175,80,0.2)",
                        borderColor: "#ffd700",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        width: 90,
                        height: 90,
                        borderRadius: "50%",
                        background:
                          "linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: "0 auto 3",
                        color: "#2e7d32",
                        boxShadow: "0 8px 25px rgba(76,175,80,0.2)",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          transform: "rotate(10deg) scale(1.1)",
                        },
                      }}
                    >
                      {feature.icon}
                    </Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 900,
                        mb: 2,
                        mt: 3,
                        color: "#0d3d1a",
                        fontSize: "1.3rem",
                      }}
                    >
                      {feature.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "#555", lineHeight: 1.7, fontWeight: 500 }}
                    >
                      {feature.description}
                    </Typography>
                  </Paper>
                </Zoom>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box
        sx={{
          py: 20,
          background:
            "linear-gradient(135deg, #0d3d1a 0%, #1a5f2a 50%, #2d8f4e 100%)",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(255,215,0,0.15) 0%, transparent 70%)",
            top: -200,
            left: -200,
            animation: "float 20s ease-in-out infinite",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)",
            bottom: -150,
            right: -150,
            animation: "float 15s ease-in-out infinite reverse",
          }}
        />
        <Container maxWidth="md" sx={{ position: "relative", zIndex: 1 }}>
          <Avatar
            sx={{
              width: 80,
              height: 80,
              backgroundColor: "rgba(255,215,0,0.2)",
              margin: "0 auto 4",
              fontSize: 40,
            }}
          >
            🦅
          </Avatar>
          <Typography
            variant={isMobile ? "h4" : "h3"}
            sx={{
              color: "white",
              fontWeight: 900,
              mb: 3,
              fontSize: isMobile ? "2rem" : "3.5rem",
              textShadow: "2px 4px 8px rgba(0,0,0,0.3)",
            }}
          >
            هل أنت مستعد لنشر أجنحتك؟
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "rgba(255,255,255,0.95)",
              mb: 6,
              fontSize: isMobile ? "1.1rem" : "1.4rem",
              lineHeight: 1.8,
              maxWidth: "600px",
              marginX: "auto",
            }}
          >
            انضم إلى آلاف عشاق الطيور وابدأ رحلتك اليوم
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{
              background: "linear-gradient(135deg, #ffd700 0%, #ffed4a 100%)",
              color: "#0d3d1a",
              fontWeight: 900,
              px: 8,
              py: 2.5,
              borderRadius: 4,
              fontSize: "1.2rem",
              boxShadow: "0 10px 40px rgba(255,215,0,0.4)",
              "&:hover": {
                background: "linear-gradient(135deg, #ffed4a 0%, #fff59d 100%)",
                transform: "scale(1.08) translateY(-4px)",
                boxShadow: "0 15px 50px rgba(255,215,0,0.5)",
              },
              transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
            startIcon={<FlightTakeoff />}
          >
            كن عضواً الآن
          </Button>
        </Container>
      </Box>

      {/* Footer */}
      <Box sx={{ backgroundColor: "#0d3d1a", py: 10, color: "white" }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} justifyContent="space-between">
            <Grid item xs={12} md={4}>
              <Typography
                variant="h5"
                sx={{ fontWeight: 900, mb: 3, fontSize: "1.5rem" }}
              >
                🦅 نادي الطيور
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "rgba(255,255,255,0.8)",
                  lineHeight: 1.8,
                  fontSize: "1rem",
                }}
              >
                نربط عشاق الطيور حول العالم منذ عام 1999. انضم إلينا في مهمتنا
                لحماية والاحتفاء بالتنوع الطيري.
              </Typography>
              <Box sx={{ display: "flex", gap: 2, mt: 3 }}>
                {[<Star />, <EmojiEvents />, <VolunteerActivism />].map(
                  (Icon, index) => (
                    <Avatar
                      key={index}
                      sx={{
                        backgroundColor: "rgba(255,215,0,0.2)",
                        color: "#ffd700",
                        width: 40,
                        height: 40,
                      }}
                    >
                      {Icon}
                    </Avatar>
                  ),
                )}
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography
                variant="h6"
                sx={{ fontWeight: 800, mb: 3, fontSize: "1.2rem" }}
              >
                روابط سريعة
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                {["من نحن", "العضوية", "الفعاليات", "المعرض", "اتصل بنا"].map(
                  (link) => (
                    <Typography
                      key={link}
                      variant="body2"
                      sx={{
                        color: "rgba(255,255,255,0.8)",
                        cursor: "pointer",
                        fontWeight: 600,
                        fontSize: "1rem",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          color: "#ffd700",
                          transform: "translateX(-5px)",
                        },
                      }}
                    >
                      {link}
                    </Typography>
                  ),
                )}
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography
                variant="h6"
                sx={{ fontWeight: 800, mb: 3, fontSize: "1.2rem" }}
              >
                تابعنا
              </Typography>
              <Box sx={{ display: "flex", gap: 2 }}>
                {[Twitter, Facebook, Instagram].map((Icon, index) => (
                  <IconButton
                    key={index}
                    sx={{
                      backgroundColor: "rgba(255,255,255,0.1)",
                      color: "white",
                      width: 50,
                      height: 50,
                      transition: "all 0.3s ease",
                      "&:hover": {
                        backgroundColor: "#ffd700",
                        color: "#0d3d1a",
                        transform: "scale(1.1) rotate(5deg)",
                      },
                    }}
                  >
                    <Icon sx={{ fontSize: 24 }} />
                  </IconButton>
                ))}
              </Box>
              <Box sx={{ mt: 4 }}>
                <Typography
                  variant="body2"
                  sx={{ color: "rgba(255,255,255,0.6)", mb: 2 }}
                >
                  اشترك في النشرة البريدية
                </Typography>
                <Box sx={{ display: "flex", gap: 1 }}>
                  <Box
                    sx={{
                      flex: 1,
                      backgroundColor: "rgba(255,255,255,0.1)",
                      borderRadius: 2,
                      px: 2,
                      py: 1.5,
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{ color: "rgba(255,255,255,0.5)" }}
                    >
                      بريدك الإلكتروني
                    </Typography>
                  </Box>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#ffd700",
                      color: "#0d3d1a",
                      fontWeight: 700,
                      px: 3,
                      borderRadius: 2,
                      "&:hover": {
                        backgroundColor: "#ffed4a",
                      },
                    }}
                  >
                    اشترك
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
          <Box
            sx={{
              mt: 8,
              pt: 4,
              borderTop: "1px solid rgba(255,255,255,0.1)",
              textAlign: "center",
            }}
          >
            <Typography
              variant="body2"
              sx={{ color: "rgba(255,255,255,0.6)", fontWeight: 600 }}
            >
              © 2024 نادي الطيور. جميع الحقوق محفوظة.
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default Home;
