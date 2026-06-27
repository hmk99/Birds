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
  History,
  Lightbulb,
  Verified,
  WorkspacePremium,
  TrendingUp,
} from "@mui/icons-material";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";

function About() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const milestones = [
    {
      year: "1999",
      title: "التأسيس",
      description: "بدأ نادي الطيور كمجموعة صغيرة من عشاق الطيور",
      icon: <History />,
    },
    {
      year: "2005",
      title: "التوسع",
      description: "وصلنا إلى 1000 عضو في 10 دول مختلفة",
      icon: <TrendingUp />,
    },
    {
      year: "2012",
      title: "الحفاظ",
      description: "أطلقنا أول برنامج لحماية الطيور المهددة",
      icon: <VolunteerActivism />,
    },
    {
      year: "2018",
      title: "التعليم",
      description: "أصبحنا أكبر منصة تعليمية لدراسة الطيور",
      icon: <School />,
    },
    {
      year: "2024",
      title: "العالمية",
      description: "أكثر من 10,000 عضو في 50 دولة حول العالم",
      icon: <Public />,
    },
  ];

  const values = [
    {
      title: "الشغف",
      description: "نحب الطيور ونسعى لحمايتها بشغف",
      icon: <Favorite />,
      color: "#e57373",
    },
    {
      title: "المعرفة",
      description: "نشارك المعرفة ونشجع التعلم المستمر",
      icon: <Lightbulb />,
      color: "#ffb74d",
    },
    {
      title: "الجودة",
      description: "نلتزم بأعلى معايير الجودة في كل ما نقدمه",
      icon: <WorkspacePremium />,
      color: "#ffd54f",
    },
    {
      title: "الابتكار",
      description: "نبحث دائماً عن طرق جديدة ومبتكرة",
      icon: <AutoAwesome />,
      color: "#ba68c8",
    },
    {
      title: "التعاون",
      description: "نعمل معاً كفريق واحد لتحقيق أهدافنا",
      icon: <Groups />,
      color: "#4db6ac",
    },
    {
      title: "النزاهة",
      description: "نتمتع بالشفافية والنزاهة في جميع تعاملاتنا",
      icon: <Verified />,
      color: "#64b5f6",
    },
  ];

  const team = [
    {
      name: "د. أحمد الفهد",
      role: "المؤسس والمدير التنفيذي",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
    },
    {
      name: "د. سارة العمري",
      role: "مديرة البحث العلمي",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
    },
    {
      name: "م. خالد العتيبي",
      role: "مدير الحفاظ على البيئة",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
    },
    {
      name: "أ. نورة السالم",
      role: "منسقة الفعاليات",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
    },
  ];

  return (
    <Box sx={{ marginTop: "10vh", overflowX: "hidden", direction: "rtl" }}>
      {/* Hero Section */}
      <Box
        sx={{
          position: "relative",
          minHeight: "80vh",
          display: "flex",
          alignItems: "center",
          background:
            "linear-gradient(135deg, #0d3d1a 0%, #1a5f2a 30%, #2d8f4e 70%, #4caf50 100%)",
          overflow: "hidden",
        }}
      >
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
        <style>
          {`
            @keyframes float {
              0%, 100% { transform: translate(0, 0) rotate(0deg); }
              33% { transform: translate(40px, -40px) rotate(120deg); }
              66% { transform: translate(-30px, 30px) rotate(240deg); }
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
                    label="🦅 قصتنا"
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
                    من شغف بسيط
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
                      إلى حركة عالمية
                    </Box>
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
                    بدأنا عام 1999 كمجموعة صغيرة من عشاق الطيور، واليوم نحن أكبر
                    مجتمع للطيور في العالم العربي. رحلتنا ملهمة وتستمر في النمو.
                  </Typography>
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
                    src="https://images.unsplash.com/photo-1551085254-e96b210db58a?w=800"
                    alt="طيور"
                    sx={{
                      width: "100%",
                      maxWidth: "550px",
                      borderRadius: 4,
                      boxShadow: "0 40px 80px rgba(0,0,0,0.4)",
                      border: "4px solid rgba(255,215,0,0.3)",
                    }}
                  />
                </Box>
              </Slide>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Mission & Vision */}
      <Box sx={{ py: 16, backgroundColor: "white" }}>
        <Container maxWidth="lg">
          <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
              <Zoom in={loaded} timeout={1000}>
                <Paper
                  elevation={4}
                  sx={{
                    p: 5,
                    borderRadius: 4,
                    background:
                      "linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%)",
                    height: "100%",
                    border: "2px solid #4caf50",
                  }}
                >
                  <Avatar
                    sx={{
                      width: 70,
                      height: 70,
                      backgroundColor: "#4caf50",
                      mb: 3,
                    }}
                  >
                    <FlightTakeoff sx={{ fontSize: 40 }} />
                  </Avatar>
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 900,
                      color: "#0d3d1a",
                      mb: 3,
                      fontSize: isMobile ? "1.8rem" : "2.2rem",
                    }}
                  >
                    رؤيتنا
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "#2e7d32",
                      lineHeight: 2,
                      fontSize: "1.1rem",
                      fontWeight: 500,
                    }}
                  >
                    أن نكون الرائد عالمياً في حماية الطيور وتعليم الناس عن
                    أهميتها، وخلق عالم تتعايش فيه الطيور والبشر في انسجام تام.
                  </Typography>
                </Paper>
              </Zoom>
            </Grid>
            <Grid item xs={12} md={6}>
              <Zoom in={loaded} timeout={1200}>
                <Paper
                  elevation={4}
                  sx={{
                    p: 5,
                    borderRadius: 4,
                    background:
                      "linear-gradient(135deg, #fff9c4 0%, #fff59d 100%)",
                    height: "100%",
                    border: "2px solid #ffd700",
                  }}
                >
                  <Avatar
                    sx={{
                      width: 70,
                      height: 70,
                      backgroundColor: "#ffd700",
                      mb: 3,
                    }}
                  >
                    <Explore sx={{ fontSize: 40 }} />
                  </Avatar>
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 900,
                      color: "#0d3d1a",
                      mb: 3,
                      fontSize: isMobile ? "1.8rem" : "2.2rem",
                    }}
                  >
                    مهمتنا
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "#f57f17",
                      lineHeight: 2,
                      fontSize: "1.1rem",
                      fontWeight: 500,
                    }}
                  >
                    حماية الطيور وموائلها من خلال التعليم والبحث والعمل
                    الميداني، وتعزيز الوعي بأهمية الطيور في النظام البيئي.
                  </Typography>
                </Paper>
              </Zoom>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Timeline */}
      <Box
        sx={{
          py: 16,
          backgroundColor: "linear-gradient(180deg, #f8f9fa 0%, #e8f5e9 100%)",
          position: "relative",
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: 10 }}>
            <Chip
              label="📅 رحلتنا"
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
              محطات تاريخية
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

          <Timeline position={isMobile ? "right" : "alternate"}>
            {milestones.map((milestone, index) => (
              <TimelineItem key={index}>
                <TimelineOppositeContent
                  sx={{ m: "auto 0" }}
                  align={
                    isMobile ? "right" : index % 2 === 0 ? "right" : "left"
                  }
                  variant="h6"
                  color="#4caf50"
                  fontWeight={800}
                >
                  {milestone.year}
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineConnector />
                  <TimelineDot
                    sx={{
                      backgroundColor: "#ffd700",
                      boxShadow: "0 4px 12px rgba(255,215,0,0.4)",
                    }}
                  >
                    {milestone.icon}
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: "12px", px: 2 }}>
                  <Paper
                    elevation={3}
                    sx={{
                      p: 3,
                      borderRadius: 3,
                      backgroundColor: "white",
                      border: "2px solid transparent",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        borderColor: "#ffd700",
                        transform: "translateY(-5px)",
                        boxShadow: "0 15px 35px rgba(76,175,80,0.2)",
                      },
                    }}
                  >
                    <Typography
                      variant="h6"
                      component="span"
                      fontWeight={800}
                      color="#0d3d1a"
                    >
                      {milestone.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "#666", mt: 1, lineHeight: 1.6 }}
                    >
                      {milestone.description}
                    </Typography>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </Container>
      </Box>

      {/* Values */}
      <Box sx={{ py: 16, backgroundColor: "white" }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: 10 }}>
            <Chip
              label="💎 قيمنا"
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
              القيم التي نؤمن بها
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
            {values.map((value, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Zoom in={loaded} timeout={1000 + index * 150}>
                  <Paper
                    elevation={4}
                    sx={{
                      p: 4,
                      borderRadius: 4,
                      textAlign: "center",
                      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                      height: "100%",
                      border: "2px solid transparent",
                      "&:hover": {
                        transform: "translateY(-10px) scale(1.02)",
                        boxShadow: "0 20px 50px rgba(0,0,0,0.15)",
                        borderColor: value.color,
                      },
                    }}
                  >
                    <Avatar
                      sx={{
                        width: 80,
                        height: 80,
                        backgroundColor: value.color,
                        margin: "0 auto 3",
                        boxShadow: `0 8px 25px ${value.color}40`,
                      }}
                    >
                      {value.icon}
                    </Avatar>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 900,
                        mb: 2,
                        color: "#0d3d1a",
                        fontSize: "1.3rem",
                      }}
                    >
                      {value.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "#555", lineHeight: 1.7, fontWeight: 500 }}
                    >
                      {value.description}
                    </Typography>
                  </Paper>
                </Zoom>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Team Section */}
      <Box
        sx={{
          py: 16,
          backgroundColor: "linear-gradient(180deg, #f1f8e9 0%, #f9fbe7 100%)",
          position: "relative",
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: 10 }}>
            <Chip
              label="👥 فريقنا"
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
              القيادة المتميزة
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

          <Grid container spacing={4} justifyContent="center">
            {team.map((member, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Grow in={loaded} timeout={1000 + index * 200}>
                  <Card
                    sx={{
                      borderRadius: 4,
                      boxShadow: "0 15px 40px rgba(0,0,0,0.1)",
                      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                      overflow: "hidden",
                      "&:hover": {
                        transform: "translateY(-15px) scale(1.03)",
                        boxShadow: "0 25px 60px rgba(76,175,80,0.25)",
                      },
                    }}
                  >
                    <Box sx={{ position: "relative", overflow: "hidden" }}>
                      <CardMedia
                        component="img"
                        height="250"
                        image={member.image}
                        alt={member.name}
                        sx={{
                          objectFit: "cover",
                          transition: "transform 0.5s ease",
                          "&:hover": {
                            transform: "scale(1.1)",
                          },
                        }}
                      />
                      <Box
                        sx={{
                          position: "absolute",
                          bottom: 0,
                          left: 0,
                          right: 0,
                          background:
                            "linear-gradient(transparent, rgba(0,0,0,0.7))",
                          padding: 2,
                        }}
                      />
                    </Box>
                    <CardContent sx={{ p: 3, textAlign: "center" }}>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 900,
                          mb: 1,
                          color: "#0d3d1a",
                          fontSize: "1.2rem",
                        }}
                      >
                        {member.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#4caf50",
                          fontWeight: 700,
                          fontSize: "0.95rem",
                        }}
                      >
                        {member.role}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grow>
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
            🤝
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
            انضم إلى عائلتنا
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
            كن جزءاً من رحلتنا الملهمة وساهم في حماية الطيور للأجيال القادمة
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
            startIcon={<Groups />}
          >
            انضم إلينا
          </Button>
        </Container>
      </Box>
    </Box>
  );
}

export default About;
