<?xml version="1.0" encoding="UTF-8" ?>
<html xsl:version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<body>
    <table border="1">
    <tr>
        <th>Name</th>
        <th>Gender</th>
        <th>Age</th>
    </tr>
    <xsl:for-each select="students/student">
    <tr>
        <td> <xsl:value-of select="name"/> </td>
        <td> <xsl:value-of select="gender"/> </td>
        <td> <xsl:value-of select="age"/> </td>
    </tr>
    </xsl:for-each>
    </table>
</body>

</html>  