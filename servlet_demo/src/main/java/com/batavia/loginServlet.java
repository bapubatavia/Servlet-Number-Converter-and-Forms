package com.batavia;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class loginServlet extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String email = request.getParameter("email");
        String emailDemo = "bapu.batavia@gmail.com";
        String password = request.getParameter("password");
        String passwordDemo = "12345";

        String messageGood = "Successfully logged in.";
        String messageBad = "Login failed.";

        if(email.equals(emailDemo) && password.equals(passwordDemo)){
            request.setAttribute("message", messageGood);
        } else{
            request.setAttribute("message", messageBad);
        }


        try {
            request.getRequestDispatcher("/WEB-INF/login_reply.jsp").forward(request, response);
        } catch (ServletException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        } catch (IOException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        };
    }
}
