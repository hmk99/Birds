import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
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
  TextField,
  Stack,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
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
  Email,
  Phone,
  LocationOn,
  Send,
  AccessTime,
  Language,
} from "@mui/icons-material";

function Contact() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [loaded, setLoaded] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    setLoaded(true);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission
  };

  const contactInfo = [
    {
      icon: <Email sx={{ fontSize: 32 }} />,
      title: "البريد الإلكتروني",
      content: "info@birdsclub.com",
      color: "#e57373",
    },
    {
      icon: <Phone sx={{ fontSize: 32 }} />,
      title: "الهاتف",
      content: "+213558933443",
      color: "#ffb74d",
    },
    {
      icon: <LocationOn sx={{ fontSize: 32 }} />,
      title: "العنوان",
      content: "الجزائر",
      color: "#4db6ac",
    },
    {
      icon: <AccessTime sx={{ fontSize: 32 }} />,
      title: "ساعات العمل",
      content: "الأحد - الخميس: 9 ص - 5 م",
      color: "#ba68c8",
    },
  ];

  const socialMedia = [
    { icon: <Twitter />, name: "تويتر", color: "#1DA1F2" },
    { icon: <Facebook />, name: "فيسبوك", color: "#1877F2" },
    { icon: <Instagram />, name: "إنستغرام", color: "#E4405F" },
  ];

  return (
    <Box sx={{ marginTop: "10vh", overflowX: "hidden", direction: "rtl" }}>
      {/* Hero Section */}
      <Box
        sx={{
          position: "relative",
          minHeight: "60vh",
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
          <Fade in={loaded} timeout={1000}>
            <Box sx={{ textAlign: "center" }}>
              <a href="#contact_form">
                <Chip
                  label="تواصل معنا"
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
              </a>
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
                نحن هنا
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
                  لمساعدتك
                </Box>
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "rgba(255,255,255,0.95)",
                  mb: 4,
                  fontSize: isMobile ? "1.1rem" : "1.35rem",
                  maxWidth: "600px",
                  marginX: "auto",
                  lineHeight: 1.8,
                  fontWeight: 400,
                }}
              >
                لا تتردد في التواصل معنا. فريقنا جاهز للإجابة على جميع
                استفساراتك ومساعدتك في أي وقت.
              </Typography>
            </Box>
          </Fade>
        </Container>
      </Box>

      {/* Contact Info Cards */}
      <Box
        sx={{
          py: 12,
          backgroundColor: "linear-gradient(180deg, #f8f9fa 0%, #e8f5e9 100%)",
          position: "relative",
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {contactInfo.map((info, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Zoom in={loaded} timeout={800 + index * 150}>
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
                        borderColor: info.color,
                      },
                    }}
                  >
                    <Avatar
                      sx={{
                        width: 70,
                        height: 70,
                        backgroundColor: info.color,
                        margin: "0 auto 3",
                        boxShadow: `0 8px 25px ${info.color}40`,
                      }}
                    >
                      {info.icon}
                    </Avatar>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 900,
                        mb: 2,
                        color: "#0d3d1a",
                        fontSize: "1.2rem",
                      }}
                    >
                      {info.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "#555", lineHeight: 1.7, fontWeight: 600 }}
                    >
                      {info.content}
                    </Typography>
                  </Paper>
                </Zoom>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Contact Form */}
      <Box id="contact_form" sx={{ py: 16, backgroundColor: "white" }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Fade in={loaded} timeout={1000}>
                <Box>
                  <Chip
                    label="إرسال رسالة"
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
                      mb: 3,
                      fontSize: isMobile ? "2rem" : "2.8rem",
                    }}
                  >
                    نموذج التواصل
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "#666",
                      mb: 4,
                      lineHeight: 1.8,
                      fontSize: "1.1rem",
                    }}
                  >
                    املأ النموذج أدناه وسنرد عليك في أقرب وقت ممكن. نقدر تواصلك
                    معنا!
                  </Typography>

                  <Paper
                    elevation={4}
                    sx={{
                      p: 4,
                      borderRadius: 4,
                      backgroundColor: "#f8f9fa",
                      border: "2px solid #e8f5e9",
                    }}
                  >
                    <Box component="form" onSubmit={handleSubmit}>
                      <Stack spacing={3}>
                        <TextField
                          fullWidth
                          label="الاسم الكامل"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          variant="outlined"
                          required
                          sx={{
                            "& .MuiOutlinedInput-root": {
                              "&:hover fieldset": {
                                borderColor: "#4caf50",
                              },
                              "&.Mui-focused fieldset": {
                                borderColor: "#4caf50",
                              },
                            },
                          }}
                        />
                        <TextField
                          fullWidth
                          label="البريد الإلكتروني"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          variant="outlined"
                          required
                          sx={{
                            "& .MuiOutlinedInput-root": {
                              "&:hover fieldset": {
                                borderColor: "#4caf50",
                              },
                              "&.Mui-focused fieldset": {
                                borderColor: "#4caf50",
                              },
                            },
                          }}
                        />
                        <TextField
                          fullWidth
                          label="رقم الهاتف"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          variant="outlined"
                          sx={{
                            "& .MuiOutlinedInput-root": {
                              "&:hover fieldset": {
                                borderColor: "#4caf50",
                              },
                              "&.Mui-focused fieldset": {
                                borderColor: "#4caf50",
                              },
                            },
                          }}
                        />
                        <TextField
                          fullWidth
                          label="الموضوع"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          variant="outlined"
                          required
                          sx={{
                            "& .MuiOutlinedInput-root": {
                              "&:hover fieldset": {
                                borderColor: "#4caf50",
                              },
                              "&.Mui-focused fieldset": {
                                borderColor: "#4caf50",
                              },
                            },
                          }}
                        />
                        <TextField
                          fullWidth
                          label="الرسالة"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          variant="outlined"
                          multiline
                          rows={4}
                          required
                          sx={{
                            "& .MuiOutlinedInput-root": {
                              "&:hover fieldset": {
                                borderColor: "#4caf50",
                              },
                              "&.Mui-focused fieldset": {
                                borderColor: "#4caf50",
                              },
                            },
                          }}
                        />
                        <Button
                          type="submit"
                          variant="contained"
                          size="large"
                          fullWidth
                          sx={{
                            background:
                              "linear-gradient(135deg, #4caf50 0%, #81c784 100%)",
                            color: "white",
                            fontWeight: 900,
                            py: 2,
                            fontSize: "1.1rem",
                            boxShadow: "0 8px 25px rgba(76,175,80,0.4)",
                            "&:hover": {
                              background:
                                "linear-gradient(135deg, #66bb6a 0%, #a5d6a7 100%)",
                              transform: "translateY(-2px)",
                              boxShadow: "0 12px 35px rgba(76,175,80,0.5)",
                            },
                            transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                          }}
                          startIcon={<Send style={{ margin: "0 .5rem" }} />}
                        >
                          إرسال الرسالة
                        </Button>
                      </Stack>
                    </Box>
                  </Paper>
                </Box>
              </Fade>
            </Grid>

            <Grid item xs={12} md={6}>
              <Slide in={loaded} direction="left" timeout={1200}>
                <Box>
                  <Box
                    component="img"
                    src="https://images.unsplash.com/photo-1444464666168-49d633b86797?w=800"
                    alt="تواصل"
                    sx={{
                      width: "100%",
                      borderRadius: 4,
                      boxShadow: "0 30px 60px rgba(0,0,0,0.2)",
                      mb: 4,
                    }}
                  />

                  <Paper
                    elevation={4}
                    sx={{
                      p: 4,
                      borderRadius: 4,
                      background:
                        "linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%)",
                      border: "2px solid #4caf50",
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 900,
                        mb: 3,
                        color: "#0d3d1a",
                        fontSize: "1.3rem",
                      }}
                    >
                      لماذا تتصل بنا؟
                    </Typography>
                    <List>
                      {[
                        "الاستفسارات عن العضوية",
                        "الاقتراحات والآراء",
                        "التعاون والمشاريع",
                        "الدعم الفني",
                        "الإبلاغ عن مشاكل",
                      ].map((item, index) => (
                        <ListItem key={index} sx={{ px: 0 }}>
                          <ListItemIcon>
                            <Favorite sx={{ color: "#e57373", fontSize: 20 }} />
                          </ListItemIcon>
                          <ListItemText
                            primary={item}
                            sx={{
                              "& .MuiTypography-root": {
                                fontWeight: 600,
                                color: "#2e7d32",
                              },
                            }}
                          />
                        </ListItem>
                      ))}
                    </List>
                  </Paper>
                </Box>
              </Slide>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Social Media */}
      <Box
        sx={{
          py: 12,
          backgroundColor: "linear-gradient(180deg, #f1f8e9 0%, #f9fbe7 100%)",
          position: "relative",
        }}
      >
        <Container maxWidth="md">
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <Chip
              label="🌐 تابعنا"
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
              على وسائل التواصل الاجتماعي
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
            {socialMedia.map((social, index) => (
              <Grid item xs={12} sm={4} key={index}>
                <Zoom in={loaded} timeout={1000 + index * 200}>
                  <Paper
                    elevation={4}
                    sx={{
                      p: 4,
                      borderRadius: 4,
                      textAlign: "center",
                      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                      cursor: "pointer",
                      border: "2px solid transparent",
                      "&:hover": {
                        transform: "translateY(-10px) scale(1.05)",
                        boxShadow: `0 20px 50px ${social.color}40`,
                        borderColor: social.color,
                      },
                    }}
                  >
                    <Avatar
                      sx={{
                        width: 70,
                        height: 70,
                        backgroundColor: social.color,
                        margin: "0 auto 3",
                        boxShadow: `0 8px 25px ${social.color}40`,
                      }}
                    >
                      {social.icon}
                    </Avatar>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 900,
                        color: "#0d3d1a",
                        fontSize: "1.2rem",
                      }}
                    >
                      {social.name}
                    </Typography>
                  </Paper>
                </Zoom>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Map Section */}
      <Box sx={{ py: 16, backgroundColor: "white" }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <Chip
              label="📍 موقعنا"
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
              زورونا في مقرنا
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

          <Paper
            elevation={4}
            sx={{
              borderRadius: 4,
              overflow: "hidden",
              height: isMobile ? "300px" : "450px",
              border: "3px solid #4caf50",
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: "100%",
                backgroundColor: "#e8f5e9",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1200')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                position: "relative",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  backgroundColor: "rgba(13, 61, 26, 0.3)",
                }}
              />
              <Box
                sx={{
                  position: "relative",
                  zIndex: 1,
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Avatar
                  sx={{
                    width: 80,
                    height: 80,
                    backgroundColor: "rgba(255,215,0,0.9)",
                    margin: "0 auto 2",
                    boxShadow: "0 8px 25px rgba(255,215,0,0.4)",
                  }}
                >
                  <LocationOn sx={{ fontSize: 48, color: "#0d3d1a" }} />
                </Avatar>
                <Typography
                  variant="h5"
                  sx={{
                    color: "white",
                    fontWeight: 900,
                    textShadow: "2px 4px 8px rgba(0,0,0,0.5)",
                  }}
                >
                  الجزائر العاصمة، الجزائر
                </Typography>
              </Box>
            </Box>
          </Paper>
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
            💬
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
            ننتظر سماعك
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
            فريقنا الدعم جاهز لمساعدتك على مدار الساعة. تواصل معنا الآن!
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
            startIcon={<Send style={{ margin: "0 .5rem" }} />}
          >
            <a href="#contact_form">تواصل معنا الآن</a>
          </Button>
        </Container>
      </Box>
    </Box>
  );
}

export default Contact;
