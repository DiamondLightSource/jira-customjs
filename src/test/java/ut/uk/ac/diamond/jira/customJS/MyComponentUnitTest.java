package ut.uk.ac.diamond.jira.customJS;

import org.junit.Test;
import uk.ac.diamond.jira.customJS.api.MyPluginComponent;
import uk.ac.diamond.jira.customJS.impl.MyPluginComponentImpl;

import static org.junit.Assert.assertEquals;

public class MyComponentUnitTest
{
    @Test
    public void testMyName()
    {
        MyPluginComponent component = new MyPluginComponentImpl(null);
        assertEquals("names do not match!", "myComponent",component.getName());
    }
}